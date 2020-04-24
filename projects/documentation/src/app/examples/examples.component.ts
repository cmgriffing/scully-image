import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute, Router, ROUTES } from '@angular/router';

declare var ng: any;

@Component({
  selector: 'app-examples',
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated,
})
export class ExamplesComponent implements OnInit {
  exampleType = 'blur';

  ngOnInit() {}

  constructor(private router: Router, private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      if (params.exampleType) {
        this.exampleType = params.exampleType;
      }
    });
  }
}
