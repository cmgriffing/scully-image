import { VisibilityService } from './visibility.service';
import {
  Component,
  OnInit,
  Input,
  OnChanges,
  HostBinding,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import {
  isScullyRunning,
  isScullyGenerated,
  TransferStateService,
} from '@scullyio/ng-lib';
import { interval, combineLatest, of, Subscription } from 'rxjs';
import { filter, switchMap, take } from 'rxjs/operators';

export enum PreloaderTypes {
  blur = 'base64',
  tracedSVG = 'tracedSVG',
  sqip = 'sqip',
}

const FULL = 'full';

export interface blurOptions {
  width: number;
}

export interface sqipOptions {
  numberOfPrimitives?: number;
  mode?: sqipModes;
  rep?: number;
  alpha?: number;
  cores?: number;
  background?: string;
}

export enum sqipModes {
  combo = 0,
  triangle = 1,
  rect = 2,
  ellipse = 3,
  circle = 4,
  rotatedrect = 5,
  beziers = 6,
  rotatedellipse = 7,
  polygon = 8,
}

export interface tracedOptions {
  turnPolicy?: tracedTurnPolicies;
  turdSize?: number;
  alphaMax?: number;
  optCurve?: boolean;
  optTolerance?: number;
  threshold?: number;
  blackOnWhite?: boolean;
  color?: string;
  background?: string;
}

export enum tracedTurnPolicies {
  TURNPOLICY_BLACK = 'black',
  TURNPOLICY_WHITE = 'white',
  TURNPOLICY_LEFT = 'left',
  TURNPOLICY_RIGHT = 'right',
  TURNPOLICY_MINORITY = 'minority',
  TURNPOLICY_MAJORITY = 'majority',
}

export const SCULLY_IMAGE_URL_MAP = 'scullyImageUrlMap';

const template = `
<img
  [style.height]="getHeight()"
  [style.width]="getWidth()"
  [class.blurred]="preloader === PreloaderTypes.blur && !imageLoaded"
  [class.loaded]="imageLoaded"
  class="preloaded-image"
  data-scully-image="something"
  [src]="preloadedSrc"
/>
<img
  [style.height]="getHeight()"
  [style.width]="getWidth()"
  [class.blurred]="preloader === PreloaderTypes.blur && !imageLoaded"
  [class.loaded]="imageLoaded"
  class="preloaded-image-fade-hack"
  data-scully-image="something"
  [src]="preloadedSrc"
/>
<img
  [style.height]="getHeight()"
  [style.width]="getWidth()"
  [class.loaded]="imageLoaded"
  class="loaded-image"
  [src]="loadedSrc"
  [class.blurred]="preloader === PreloaderTypes.blur && !imageLoaded"
/>
`;

const componentStyles = `
:host {
  position: relative;
  display: block;
  overflow: hidden;
}

:host img {
  transition: opacity 300ms, filter 300ms;
  width: 100%;
  height: auto;
}

:host .preloaded-image {
  z-index: 3;
  opacity: 1;
}

:host .preloaded-image.loaded {
  opacity: 0;
}

:host .preloaded-image-fade-hack {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  opacity: 1;
}

:host .preloaded-image-fade-hack.loaded {
  opacity: 0;
}

:host .loaded-image {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  opacity: 0;
}

:host .loaded-image.loaded {
  opacity: 1;
}

.blurred {
  filter: blur(20px);
}
`;

@Component({
  selector: 'scully-image',
  template,
  styles: [componentStyles],
})
export class ScullyImageComponent {
  @Input()
  src = '';

  @Input()
  pixelHeight: number;

  @Input()
  pixelWidth: number;

  @Input()
  fluidMaxWidth: number;

  @Input()
  fluidMaxHeight: number;

  @Input()
  lazy = true;

  @Input()
  pluginOptions: blurOptions | sqipOptions | tracedOptions = {};

  @Input()
  preloader = PreloaderTypes.blur;

  PreloaderTypes = PreloaderTypes;

  getHeight() {
    if (this.pixelHeight) {
      return this.pixelHeight + 'px';
    } else {
      return 'auto';
    }
  }

  getWidth() {
    if (this.pixelWidth) {
      return this.pixelWidth + 'px';
    } else {
      return '100%';
    }
  }

  @HostBinding('style.height')
  get height() {
    return this.getHeight();
  }

  @HostBinding('style.width')
  get width() {
    return this.getWidth();
  }

  imageLoaded = false;
  scullyImageUrlMap = {};
  preloadedSrc: any = '';
  loadedSrc = '';
  elementInSight$: Subscription;

  constructor(
    private transferState: TransferStateService,
    private sanitizer: DomSanitizer,
    private visibilityService: VisibilityService,
    private elementRef: ElementRef
  ) {}

  baseInit(): void {
    if (isScullyGenerated()) {
      console.log('scully is generated');

      this.transferState
        .getState(SCULLY_IMAGE_URL_MAP)
        .subscribe((scullyImageUrlMap) => {
          console.log('scullyImageUrlMap', { scullyImageUrlMap });
          this.scullyImageUrlMap = scullyImageUrlMap;
          console.log('pluginOptions', this.pluginOptions);
          this.preloadedSrc =
            scullyImageUrlMap[this.getImageKey(this.preloader)];
          if (this.preloader === PreloaderTypes.sqip) {
            this.preloadedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
              this.preloadedSrc
            );
          } else if (this.preloader === PreloaderTypes.tracedSVG) {
            this.preloadedSrc = this.sanitizer.bypassSecurityTrustResourceUrl(
              this.preloadedSrc
            );
          }
          const fullSizeImageUrl =
            scullyImageUrlMap[this.getImageKey(FULL)] || this.src;

          if (this.lazy) {
            this.elementInSight$ = combineLatest(
              interval(2000),
              this.visibilityService.elementInSight(this.elementRef),
              (counter, visible) => visible
            )
              .pipe(
                filter((visible: boolean) => visible),
                take(1)
              )
              .subscribe(() => {
                this.fetchImage(fullSizeImageUrl);
              });
          } else {
            this.fetchImage(fullSizeImageUrl);
          }
        });
    } else {
      this.transferState.setState(SCULLY_IMAGE_URL_MAP, {});
    }
  }

  fetchImage(fullSizeImageUrl) {
    const imgElement = document.createElement('img');
    imgElement.onload = () => {
      setTimeout(() => {
        console.log('image has been loaded');
        this.loadedSrc = fullSizeImageUrl;
        this.imageLoaded = true;
      }, 300);
    };
    imgElement.src = fullSizeImageUrl;
    this.loadedSrc = fullSizeImageUrl;
  }

  ngOnChanges(changes): void {
    // if (changes.src && changes.src !== '') {
    // }
    // if (isScullyGenerated()) {
    //   console.log('scully is generated');
    //   this.getStateAsPromise();
    // } else {
    //   console.log('setting state', this.src);
    //   this.transferState.setState('src', { src: this.src });
    // }
  }

  baseOnDestroy() {
    if (this.elementInSight$) {
      this.elementInSight$.unsubscribe();
    }
  }

  getImageKey(preloaderType = '') {
    const key =
      this.src +
      preloaderType +
      JSON.stringify(this.pluginOptions) +
      (this.pixelHeight || 0) +
      (this.pixelWidth || 0) +
      (this.fluidMaxHeight || 0) +
      (this.fluidMaxWidth || 0);
    console.log({ key });
    return key;
  }
}

@Component({
  selector: 'scully-blur-image',
  template,
  styles: [componentStyles],
})
export class ScullyBlurImageComponent extends ScullyImageComponent
  implements OnInit, OnChanges, OnDestroy {
  @Input()
  preloader = PreloaderTypes.blur;

  @HostBinding('style.height')
  get height() {
    return this.getHeight();
  }

  @HostBinding('style.width')
  get width() {
    return this.getWidth();
  }

  @HostBinding('attr.data-type')
  get type() {
    return this.preloader;
  }

  @HostBinding('attr.data-plugin-options')
  get pluginOptionsAsString() {
    return JSON.stringify(this.pluginOptions);
  }

  ngOnInit(): void {
    this.baseInit();
  }

  ngOnDestroy() {
    this.baseOnDestroy();
  }
}

@Component({
  selector: 'scully-traced-image',
  template,
  styles: [componentStyles],
})
export class ScullyTracedImageComponent extends ScullyImageComponent
  implements OnInit, OnChanges, OnDestroy {
  @Input()
  preloader = PreloaderTypes.tracedSVG;

  @HostBinding('style.height')
  get height() {
    return this.getHeight();
  }

  @HostBinding('style.width')
  get width() {
    return this.getWidth();
  }

  @HostBinding('attr.data-type')
  get type() {
    return this.preloader;
  }

  @HostBinding('attr.data-plugin-options')
  get pluginOptionsAsString() {
    return JSON.stringify(this.pluginOptions);
  }

  ngOnInit(): void {
    this.baseInit();
  }

  ngOnDestroy() {
    this.baseOnDestroy();
  }
}

@Component({
  selector: 'scully-sqip-image',
  template,
  styles: [componentStyles],
})
export class ScullySqipImageComponent extends ScullyImageComponent
  implements OnInit, OnChanges, OnDestroy {
  @Input()
  preloader = PreloaderTypes.sqip;

  @HostBinding('style.height')
  get height() {
    return this.getHeight();
  }

  @HostBinding('style.width')
  get width() {
    return this.getWidth();
  }

  @HostBinding('attr.data-type')
  get type() {
    return this.preloader;
  }

  @HostBinding('attr.data-plugin-options')
  get pluginOptionsAsString() {
    return JSON.stringify(this.pluginOptions);
  }

  ngOnInit(): void {
    this.baseInit();
  }

  ngOnDestroy() {
    this.baseOnDestroy();
  }
}
