import { ScullyImageModule } from 'scully-image';
import { ExamplesComponent } from './examples.component';
import { ExamplesRoutingModule } from './examples-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ExamplesComponent],
  imports: [CommonModule, ExamplesRoutingModule, ScullyImageModule],
})
export class ExamplesModule {}
