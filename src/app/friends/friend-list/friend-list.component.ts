import { Component } from '@angular/core';
import { Friend } from '../friends.model';
import { Subscription } from 'rxjs';
import { FriendService } from '../friend.service';

@Component({
  selector: 'app-friend-list',
  standalone: false,
  templateUrl: './friend-list.component.html',
  styleUrl: './friend-list.component.css'
})
export class FriendListComponent {
  subject: Subscription| undefined

    friendList: Friend []
  constructor(private friendService : FriendService){
    this.friendService.friendSelectedEvent
  }
  ngOnInit(){

    this.subject = this.friendService.friendListChange.subscribe( friendList =>{
      this.friendList = friendList
    })
    this.friendList = this.friendService.getFriends()

  }
}
