import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'documentation';

  isHome = true;
  isExamplePage = false;

  constructor(
    private scully: ScullyRoutesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationEnd) {
        this.isHome = event.url === '/';
        this.isExamplePage = event.url.indexOf('/examples/') > -1;
      }
    });
  }
}
