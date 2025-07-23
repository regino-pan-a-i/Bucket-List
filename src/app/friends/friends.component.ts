import { Component } from '@angular/core';
import { FriendService } from './friend.service';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';



@Component({
  selector: 'app-friends',
  standalone: false,
  templateUrl: './friends.component.html',
  styleUrl: './friends.component.css'
})
export class FriendsComponent {

  isRouterOutletActive: boolean = false;

  constructor(private friendService: FriendService, private router: Router){
      this.friendService.friendSelectedEvent
    }

  ngOnInit(){
    // Check initial route state
    this.checkRouterOutletState();

    // Listen to route changes
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      this.checkRouterOutletState();
    });
  }

  checkRouterOutletState() {
    const currentUrl = this.router.url;
    // Check if we're on a child route of recommendations
    this.isRouterOutletActive = currentUrl.includes('/recommendations/') && currentUrl !== '/recommendations';
    console.log('Current URL:', currentUrl, 'Router outlet active:', this.isRouterOutletActive);
  }

  onRouterOutletActivate(component: any) {
    this.isRouterOutletActive = true;
    console.log('Router outlet activated');
  }

  onRouterOutletDeactivate() {
    this.isRouterOutletActive = false;
    console.log('Router outlet deactivated');
  }
}
