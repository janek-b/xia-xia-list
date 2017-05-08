import { Injectable } from '@angular/core';
import { Listing } from './listing.model';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

@Injectable()
export class ListingService {
  categories: string[] = ['cleats', 'meat products', 'furniture'];

  listings: FirebaseListObservable<any>;

  constructor(public db: AngularFireDatabase) {
    this.listings = db.list('/listings');
  }

  getCategories() {
    return this.categories;
  }

  addListing(listing: Listing) {
    this.listings.push(listing);
  }

  getListings(category: string) {
    const queryListing = this.db.list('/listings', {
      query: {
        orderByChild: 'category',
        equalTo: category
      }
    });
    return queryListing;
  }

  getListing(key: string) {
    const queryIndividualListing = this.db.object('/listings/' + key);
    return queryIndividualListing;
  }
}
