import { Injectable, Inject, ElementRef } from '@angular/core';
import {
  Observable,
  concat,
  defer,
  of,
  fromEvent,
  combineLatest,
  ObservableInput,
} from 'rxjs';
import { map, flatMap, distinctUntilChanged } from 'rxjs/operators';
import { DOCUMENT } from '@angular/common';

@Injectable()
export class VisibilityService {
  private pageVisible$: Observable<boolean>;

  constructor(@Inject(DOCUMENT) document: any) {
    this.pageVisible$ = concat(
      defer(() => of(!document.hidden)),
      fromEvent(document, 'visibilitychange').pipe(map((e) => !document.hidden))
    );
  }

  elementInSight(element: ElementRef): Observable<boolean> {
    const elementVisible$ = Observable.create((observer) => {
      const intersectionObserver = new IntersectionObserver((entries) => {
        observer.next(entries);
      });

      intersectionObserver.observe(element.nativeElement);

      return () => {
        intersectionObserver.disconnect();
      };
    }).pipe(
      flatMap((entries: ObservableInput<any>) => entries),
      map((entry: any) => entry.isIntersecting),
      distinctUntilChanged()
    );

    const elementInSight$ = combineLatest(
      this.pageVisible$,
      elementVisible$,
      (pageVisible, elementVisible) => pageVisible && elementVisible
    ).pipe(distinctUntilChanged()) as Observable<boolean>;

    return elementInSight$;
  }
}
