import { Component } from '@angular/core';
import { FriendService } from './friend.service';
import { Router, NavigationEnd } from '@angular/router';


@Component({
  selector: 'app-friends',
  standalone: false,
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.css'
})
export class FriendsComponent {

  constructor(private friendService: FriendService, private router: Router){
      this.friendService.friendSelectedEvent
    }
}
