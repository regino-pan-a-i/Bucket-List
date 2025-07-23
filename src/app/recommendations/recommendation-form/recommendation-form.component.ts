import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Recommendation, Category, RecommendationStatus, Reaction } from '../recommendations.model';
import { RecommendationService } from '../recommendation.service';

@Component({
  selector: 'app-recommendation-form',
  standalone: false,
  templateUrl: './recommendation-form.component.html',
  styleUrl: './recommendation-form.component.css'
})
export class RecommendationFormComponent {

  recommendation: Recommendation = new Recommendation();
  
  categories = Object.values(Category);
  statuses = Object.values(RecommendationStatus);
  reactions = Object.values(Reaction);

  constructor(
    private recommendationService: RecommendationService,
    private router: Router
  ) {
    this.recommendation.status = RecommendationStatus.NOT_TRIED;
    this.recommendation.reaction = Reaction.NO_REACTION;
    this.recommendation.imageUrl = 'https://placehold.co/300x200';
  }

  getNewId(){
    const newId = this.recommendationService.getMaxId() + 1
    return newId.toString() 
  }
  onSubmit(form: NgForm) {
    if (form.valid) {

      this.recommendation.recommendedBy = null; 

      this.recommendationService.addRecommendation(this.recommendation);
      
      this.router.navigate(['/recommendations']);
      
      this.onClear();
    }
  }

  onCancel() {
    this.router.navigate(['/recommendations']);
  }

  onClear() {
    this.recommendation = new Recommendation();
    this.recommendation.status = RecommendationStatus.NOT_TRIED;
    this.recommendation.reaction = Reaction.NO_REACTION;
    this.recommendation.imageUrl = 'https://placehold.co/300x200';
  }

}
