import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  items : WishItem[] = [
    new WishItem('Learn Angular'),
    new WishItem('Get Coffee', true),
    new WishItem('Find grass that cuts itself')
  ];

  listFilter : String = '0';

  newWishText  = '';

  title = 'wishlist';

  visibleItems : WishItem[] = this.items; // initialise with Item array

  addNewWish() {
    this.items.push(new WishItem(this.newWishText)); // add wish to items array
    this.newWishText = ''; // clear the textbox
    // important de setter un name propertie pour le input de form
  }

  filterChanged(value : any) {
    if (value==0){
      this.visibleItems = this.items;
    } else if (value == 1) {
      this.visibleItems = this.items.filter(item => !item.isComplete)
    } else {
      this.visibleItems = this.items.filter(item => item.isComplete)
    }
  }

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
