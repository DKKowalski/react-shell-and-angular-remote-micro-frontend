import { Routes } from '@angular/router';

import { PricingComponent } from './pages/pricing/pricing.component';
import { ProductsComponent } from './pages/products/products.component';
import { LandingComponent } from './pages/landing/landing.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: 'pricing', component: PricingComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'landing', component: LandingComponent },
      { path: '', redirectTo: 'landing', pathMatch: 'full' },
    ],
  },

   { path: '', redirectTo: '', pathMatch: 'full' },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
