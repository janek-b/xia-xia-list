import { Component, OnInit} from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Location } from '@angular/common';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.component.html',
  styleUrls: ['./listing-details.component.css']
})
export class ListingDetailsComponent implements OnInit {
  listingKey: string = null;
  categoryId: string = null;
  listing: Listing;

  constructor(private route: ActivatedRoute, private location: Location, private listingService: ListingService, private router: Router) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.categoryId = urlParameters['categoryId'];
      this.listingKey = urlParameters['listingId'];
    });
    this.listingService.getListing(this.listingKey).subscribe((listing) => {
      this.listing = listing;
    });
  }

}
