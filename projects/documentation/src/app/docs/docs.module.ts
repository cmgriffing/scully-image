import { RefreshableExampleComponent } from './../components/refreshable-example/refreshable-example.component';
import { DocsComponentsComponent } from './components/components.component';
import { ScullyImageModule } from 'scully-image';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ScullyLibModule } from '@scullyio/ng-lib';
import { DocsRoutingModule } from './docs-routing.module';
import { DocsComponent } from './docs.component';

@NgModule({
  declarations: [
    DocsComponent,
    DocsComponentsComponent,
    RefreshableExampleComponent,
  ],
  imports: [
    CommonModule,
    DocsRoutingModule,
    ScullyLibModule,
    FlexLayoutModule,
    ScullyImageModule,
  ],
})
export class DocsModule {}
