import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListingService } from '../listing.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: string[];

  constructor(private listingService: ListingService, private router: Router) { }

  ngOnInit() {
    this.categories = this.listingService.getCategories();
  }

  goToDetailPage(category: string) {
    this.router.navigate(['category', category]);
  }

}
