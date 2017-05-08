import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  category: string = null;
  listings: Listing[];

  constructor(private route: ActivatedRoute, private location: Location, private listingService: ListingService, private router: Router) { }
  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.category = urlParameters['categoryId'];
    });
    this.listingService.getListings(this.category).subscribe((listings) => {
      this.listings = listings;
    });
  }

  listingDetail(listing: any) {
    this.router.navigate(['category', this.category, 'listing', listing.$key]);
  }

}
