import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeModule } from './home/home.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'country',
    loadChildren: () =>
      import('./country/country.module').then(m => m.CountryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HomeModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
