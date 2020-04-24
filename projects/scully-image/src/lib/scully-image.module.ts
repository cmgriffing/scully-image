import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {
  ScullyImageComponent,
  ScullyBlurImageComponent,
  ScullyTracedImageComponent,
  ScullyPrimitivesImageComponent,
} from './scully-image.component';
import { VisibilityService } from './visibility.service';

const exportedComponents = [
  ScullyBlurImageComponent,
  ScullyTracedImageComponent,
  ScullyPrimitivesImageComponent,
];

@NgModule({
  declarations: [ScullyImageComponent, ...exportedComponents],
  imports: [HttpClientModule],
  exports: [...exportedComponents],
  providers: [VisibilityService],
})
export class ScullyImageModule {}
