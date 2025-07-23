import { Component, Input } from '@angular/core';
import { Friend } from '../friends.model';

@Component({
  selector: 'app-friend-item',
  standalone: false,
  templateUrl: './friend-item.component.html',
  styleUrl: './friend-item.component.css'
})
export class FriendItemComponent {

  @Input()  friend : Friend

}
