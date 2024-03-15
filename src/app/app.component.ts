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

  newWishText  = '';

  title = 'wishlist';

  addNewWish() {
    this.items.push(new WishItem(this.newWishText)); // add wish to items array
    this.newWishText = ''; // clear the textbox
    // important de setter un name propertie pour le input de form
  }

  toggleItem(item : WishItem) {
    item.isComplete = !item.isComplete;
    console.log(item);
  }
}
