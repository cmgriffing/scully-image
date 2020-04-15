import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScullyImageComponent } from './scully-image.component';

describe('ScullyImageComponent', () => {
  let component: ScullyImageComponent;
  let fixture: ComponentFixture<ScullyImageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScullyImageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScullyImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
