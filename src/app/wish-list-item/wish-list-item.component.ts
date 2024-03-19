import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'wish-list-item',
  templateUrl: './wish-list-item.component.html',
  styleUrl: './wish-list-item.component.css'
})
export class WishListItemComponent {
  
  @Input() wishText! : string; // ! is a non know property, is being known by the parent

  @Input() fulfilled! : boolean;
  @Output() fulfilledChange = new EventEmitter<boolean>(); // le type du event emitter est boolean

  get cssClasses() {
    //return this.fulfilled ? ['strikeout, text-muted'] : [];
    return {'strikeout text-muted' : this.fulfilled} // apply these classes based upon fulfilled property
  }

  toggleFulfilled() {
    this.fulfilled = !this.fulfilled;
    this.fulfilledChange.emit(this.fulfilled);
  }

}
