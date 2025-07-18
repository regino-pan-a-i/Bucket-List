import { Component } from '@angular/core';
import { RecommendationService } from './recommendation.service';
import { Recommendation } from './recommendations.model';

@Component({
  selector: 'app-recommendations',
  standalone: false,
  templateUrl: './recommendations.component.html',
  styleUrl: './recommendations.component.css'
})
export class RecommendationsComponent {

  selectedRecommendation:Recommendation | null = null;


  constructor(private recommendationService: RecommendationService){
    this.recommendationService.recommendationSelectedEvent

  }

  ngOnInit(){
    this.recommendationService.recommendationSelectedEvent.subscribe((rec)=>{
      this.selectedRecommendation = rec
    })
  }

}
