import { DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';

declare var ng: any;

@Component({
  selector: 'app-refreshable-example',
  templateUrl: './refreshable-example.component.html',
  styleUrls: ['./refreshable-example.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class RefreshableExampleComponent implements OnInit {
  @Input()
  url = '';

  timestamp = Date.now();

  sanitizedUrl;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.refresh();
  }

  refresh() {
    this.sanitizedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
      this.url + '?timestamp=' + Date.now()
    );
  }
}
