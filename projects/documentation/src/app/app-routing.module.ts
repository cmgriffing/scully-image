import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'docs',
    loadChildren: () => import('./docs/docs.module').then((m) => m.DocsModule),
  },
  {
    path: 'examples',
    loadChildren: () =>
      import('./examples/examples.module').then((m) => m.ExamplesModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
