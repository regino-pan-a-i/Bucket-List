import { Component, Input } from '@angular/core';
import { MOCKRECOMMENDATIONS } from '../MOCKRECOMMENDATIONS';
import { Recommendation } from '../recommendations.model';
import { RecommendationService } from '../recommendation.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recommendation-details',
  standalone: false,
  templateUrl: './recommendation-details.component.html',
  styleUrl: './recommendation-details.component.css'
})
export class RecommendationDetailsComponent {



  @Input() recommendation: Recommendation | null | undefined;

  constructor(private recommendationService: RecommendationService, private router: Router, private activatedRoute: ActivatedRoute){}

  ngOnInit(){
    this.activatedRoute.params.subscribe(params => {
      const id = params['id'];
      this.recommendation = this.recommendationService.getRecommendation(id);
    })
  }

  onDelete(){
    if (this.recommendation){
      this.recommendationService.deleteRecommendation(this.recommendation)
    }
    this.router.navigateByUrl('/recommendations')
  }

}
