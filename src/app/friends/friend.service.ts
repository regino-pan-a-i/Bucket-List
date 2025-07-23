import { EventEmitter, Injectable, Output } from '@angular/core';
import { Friend } from './friends.model';
import { Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FriendService {


  friendListChange = new Subject<Friend[]>

  friends : Friend [] = []

  @Output()  friendChangedEvent= new EventEmitter<Friend>
  @Output()  friendSelectedEvent= new EventEmitter<Friend>
  maxFriendId: number


  constructor(private httpClient: HttpClient) { 
    this.maxFriendId = this.getMaxId()
    this.httpClient
      .get('http://localhost:3000/friends')
      .subscribe((friends: any) => {
          if (friends) {
            this.friends = Object.values(friends) as Friend[];
          } else {
            this.friends = [];
          }
          this.maxFriendId = this.getMaxId()
          // sort the list of friends
          this.friends.sort()
          // emit the next document list change event
          this.friendListChange.next(this.friends)
        },
        // error method
        (error: any) => {
            throw error;
        } 
      )
  }


  addFriend(friend: Friend) {
      if (!friend) {
        return;
      }
  
      // make sure id of the new Friend is empty
      friend.id = '';
  
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
  
      // add to database
      this.httpClient.post<{ message: string, friend: Friend }>('http://localhost:3000/friends',
        friend,
        { headers: headers })
        .subscribe(
          (responseData) => {
            // add new document to documents
            this.friends.push(responseData.friend);
          }
      );
    }

  getFriends(): Friend[] {
    return this.friends.slice();
  }

  getFriend(id: string): Friend | null {
    const friend = this.friends.find(friend => friend.id === id);
    return friend ? friend : null;
  }


  updateFriend(originalFriend: Friend | null, newFriend: Friend) {
    if (!originalFriend || !newFriend) {
      return;
    }

    const pos = this.friends.findIndex(d => d.id === originalFriend.id);

    if (pos < 0) {
      return;
    }

    // set the id of the new Friend to the id of the old Friend
    newFriend.id = originalFriend.id;
    // newFriend._id = originalFriend._id;

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.httpClient.put('http://localhost:3000/friends/' + originalFriend.id,
      newFriend, { headers: headers })
      .subscribe(
        (responseData) => {
          this.friends[pos] = newFriend;
          // this.sortAndSend();
        }
      );
  }


  getMaxId(): number {
    let maxId = 0;

    this.friends.forEach(friend=> {
      const currentId = +friend.id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    });

    return maxId;
  }

  deleteFriend(friend: Friend | null) {
  
      if (!friend) {
        return;
      }
  
      const pos = this.friends.findIndex(d => d.id === friend.id);
  
      if (pos < 0) {
        return;
      }
  
      // delete from database
      this.httpClient.delete('http://localhost:3000/friends/' + friend.id)
        .subscribe(
          (responseData) => {
            this.friends.splice(pos, 1);
            // this.sortAndSend();
          }
        );
    }
}