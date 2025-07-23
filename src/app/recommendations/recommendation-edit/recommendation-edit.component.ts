import { Component, Input } from '@angular/core';
import { Reaction, Recommendation, RecommendationStatus, Category } from '../recommendations.model';
import { RecommendationService } from '../recommendation.service';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-recommendation-edit',
  standalone: false,
  templateUrl: './recommendation-edit.component.html',
  styleUrl: './recommendation-edit.component.css'
})
export class RecommendationEditComponent {
  @Input() recommendation: Recommendation | null = null;
  newRecommendation: Recommendation = new Recommendation();

  categories = Object.values(Category);
  statuses = Object.values(RecommendationStatus);
  reactions = Object.values(Reaction);

  constructor(
    private recommendationService: RecommendationService, 
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    // Get the recommendation ID from the route
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.recommendation = this.recommendationService.getRecommendation(id);
      
      if (this.recommendation) {
        // Initialize newRecommendation with current recommendation data
        this.newRecommendation = { ...this.recommendation };
      }
    });
  }
  


  onSubmit(form: NgForm) {
    if (form.valid) {

      this.newRecommendation.recommendedBy = null; 

      this.recommendationService.updateRecommendation(this.recommendation, this.newRecommendation);
      
      this.router.navigate(['/recommendations']);
    }
  }

  onCancel() {
    this.router.navigate(['/recommendations']);
  }



}
