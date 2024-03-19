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

  filter : any = () => {}; //Initialise comme une fonction vide

  get visibleItems() : WishItem[] {
    return this.items.filter(this.filter);
  }; // initialise with Item array

}
