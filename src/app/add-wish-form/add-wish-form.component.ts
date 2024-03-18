import { Component, Output, EventEmitter } from '@angular/core';
import { WishItem } from '../../shared/models/wishItem';

@Component({
  selector: 'add-wish-form',
  templateUrl: './add-wish-form.component.html',
  styleUrl: './add-wish-form.component.css'
})
export class AddWishFormComponent {
  @Output() addWish = new EventEmitter<WishItem>(); // Va passer un new WishItem object
                                                    // qui contient les new wishers texts
  
  newWishText  = '';

  addNewWish() {
    this.addWish.emit(new WishItem(this.newWishText)); // add wish to items array
    this.newWishText = ''; // clear the textbox
    // important de setter un name propertie pour le input de form
  }
}
