import { Component } from '@angular/core';
import { RecommendationService } from './recommendation.service';
import { Recommendation } from './recommendations.model';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-recommendations',
  standalone: false,
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent {

  selectedRecommendation:Recommendation | null = null;
  isRouterOutletActive: boolean = false;

  constructor(private recommendationService: RecommendationService, private router: Router){
    this.recommendationService.recommendationSelectedEvent
  }

  ngOnInit(){
    this.recommendationService.recommendationSelectedEvent.subscribe((rec)=>{
      this.selectedRecommendation = rec
    })

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
