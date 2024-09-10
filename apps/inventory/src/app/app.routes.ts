import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'products',
    loadComponent: () =>
      import('@ecommerce-platform/products').then((p) => p.ProductsComponent),
  },
];
