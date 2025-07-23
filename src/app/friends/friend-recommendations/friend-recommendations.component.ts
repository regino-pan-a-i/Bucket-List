import { Component, Input, input } from '@angular/core';
import { Subscription } from 'rxjs';
import { Recommendation } from '../../recommendations/recommendations.model';
import { RecommendationService } from '../../recommendations/recommendation.service';
import { Friend } from '../friends.model';

@Component({
  selector: 'app-friend-recommendations',
  standalone: false,
  templateUrl: './friend-recommendations.component.html',
  styleUrl: './friend-recommendations.component.css'
})
export class FriendRecommendationsComponent {

  @Input() friend : Friend

  subject: Subscription| undefined

  recommendations : Recommendation[]
  selectedRecommendation : boolean = false


  constructor(private recommendationService : RecommendationService){
    this.recommendationService.recommendationSelectedEvent
  }
  ngOnInit(){

    this.subject = this.recommendationService.recommendationListChange.subscribe( recList =>{
      this.recommendations = recList
    })
    this.recommendations = this.recommendationService.getRecommendations()

  }


}
