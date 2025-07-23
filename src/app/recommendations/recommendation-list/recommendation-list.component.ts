import { Component } from '@angular/core';
import { MOCKRECOMMENDATIONS } from '../MOCKRECOMMENDATIONS';
import { Category, Recommendation } from '../recommendations.model';
import { Subscription } from 'rxjs';
import { RecommendationService } from '../recommendation.service';

@Component({
  selector: 'app-recommendation-list',
  standalone: false,
  templateUrl: './recommendation-list.component.html',
  styleUrl: './recommendation-list.component.css'
})
export class RecommendationListComponent {

  subject: Subscription| undefined

  recommendations : Recommendation[]
  selectedRecommendation : boolean = false

  selectedCategory : Category | null

  constructor(private recommendationService : RecommendationService){
    this.recommendationService.recommendationSelectedEvent
  }
  ngOnInit(){

    this.subject = this.recommendationService.recommendationListChange.subscribe( recList =>{
      this.recommendations = recList
    })
    this.recommendations = this.recommendationService.getRecommendations()

  }

  filterClick(strCategory: string){
    if (strCategory === "clear"){
      this.selectedCategory = null
    } else {
      this.selectedCategory = strCategory as Category
    }
  }
}
