import { Component, OnInit } from '@angular/core';
import { Listing } from '../listing.model';
import { ListingService } from '../listing.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-listing-new',
  templateUrl: './listing-new.component.html',
  styleUrls: ['./listing-new.component.css']
})
export class ListingNewComponent implements OnInit {
  listingForm: FormGroup;
  categories: string[];

  constructor(private listingService: ListingService, private fb: FormBuilder) { }

  ngOnInit() {
    this.categories = this.listingService.getCategories();
    this.listingForm = this.fb.group({
      title: '',
      category: '',
      description: '',
      img: '',
      location: '',
      price: '',
    })
  }

  addListing() {
    const formModel = this.listingForm.value;
    var newListing: Listing = new Listing(formModel.title, formModel.category, formModel.description, formModel.img, formModel.location, formModel.price);
    this.listingService.addListing(newListing);
    this.listingForm.reset();
  }

}
