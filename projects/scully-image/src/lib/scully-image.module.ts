import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  ScullyImageComponent,
  ScullyBlurImageComponent,
  ScullyTracedImageComponent,
  ScullySqipImageComponent
} from './scully-image.component';

const exportedComponents = [
  ScullyBlurImageComponent,
  ScullyTracedImageComponent,
  ScullySqipImageComponent
];

@NgModule({
  declarations: [ScullyImageComponent, ...exportedComponents],
  imports: [HttpClientModule],
  exports: [...exportedComponents]
})
export class ScullyImageModule {}
