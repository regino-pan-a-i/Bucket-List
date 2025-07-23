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

  details : boolean = false
  
  ngOnInit(){
    console.log(this.friend.recommendedItems.length)
    setTimeout(()=>{
      document.getElementById('recCount'+this.friend.id).innerText = this.friend.recommendedItems.length.toString()
    }, 500)
    

  }

  clickDetails(friendId : string){
    this.details = !this.details
    const text = document.getElementById('viewDetails' + friendId).innerText 
    if (text != "Close")
    {
      document.getElementById('viewDetails' + friendId).innerText = "Close"
      document.getElementById('viewDetails' + friendId).classList.remove('btn-info')
      document.getElementById('viewDetails' + friendId).classList.add('btn-danger')
      
    }else{
      document.getElementById('viewDetails' + friendId).innerText = "See Details"
      document.getElementById('viewDetails' + friendId).classList.remove('btn-danger')
      document.getElementById('viewDetails' + friendId).classList.add('btn-info')

    }
  }
}
