import { Subscription } from 'rxjs';
import {
  Component,
  OnInit,
  ViewEncapsulation,
  AfterViewInit,
} from '@angular/core';
import { ActivatedRoute, Router, ROUTES, NavigationEnd } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { components } from './data/components';

declare var ng: any;

@Component({
  selector: 'app-docs',
  templateUrl: './docs.component.html',
  styleUrls: ['./docs.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class DocsComponent implements OnInit, AfterViewInit {
  links: any[];

  components = components;
  currentRoute;

  currentFragment;

  isExamplePage = false;

  queryParamSubscription: Subscription;
  routerSubscription: Subscription;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private scully: ScullyRoutesService
  ) {}

  ngOnInit() {
    this.scully.available$.subscribe((links) => {
      console.log('getting links');
      this.links = links.sort((a, b) => {
        if (a.order > b.order) {
          return 1;
        } else if (a.order < b.order) {
          return -1;
        } else {
          return 0;
        }
      });
    });

    this.routerSubscription = this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.getCurrentRoute();
        this.route.fragment.subscribe((fragment) => {
          if (fragment) {
            setTimeout(() => {
              document.querySelector(`#${fragment}`).scrollIntoView();
            }, 20);
          }
        });
      }
    });
    this.getCurrentRoute();

    this.queryParamSubscription = this.route.queryParams.subscribe(
      (queryParams) => {
        console.log({ queryParams });
        if (queryParams.example === 'true') {
          this.isExamplePage = true;
        }
      }
    );
  }

  ngAfterViewInit() {
    this.route.fragment.subscribe((fragment) => {
      this.currentFragment = fragment;
      if (fragment) {
        setTimeout(() => {
          document.querySelector(`#${fragment}`).scrollIntoView();
        }, 20);
      }
    });
  }

  ngOnDestroy() {
    if (this.queryParamSubscription) {
      this.queryParamSubscription.unsubscribe();
    }
    if (this.routerSubscription) {
      this.routerSubscription.unsubscribe();
    }
  }

  getCurrentRoute() {
    this.scully.getCurrent().subscribe((currentRoute) => {
      this.currentRoute = currentRoute;
    });
  }
}
