import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryDetailsComponent } from './category-details/category-details.component';
import { ListingNewComponent } from './listing-new/listing-new.component';
import { ListingDetailsComponent } from './listing-details/listing-details.component';

const appRoutes: Routes = [
  {
    path: '',
    component: CategoryListComponent
  },
  {
    path: 'new',
    component: ListingNewComponent
  },
  {
    path: 'category/:categoryId/listing/:listingId',
    component: ListingDetailsComponent
  },
  {
    path: 'category/:categoryId',
    component: CategoryDetailsComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
