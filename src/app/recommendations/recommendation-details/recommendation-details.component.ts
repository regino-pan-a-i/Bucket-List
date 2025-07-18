import { Component } from '@angular/core';
import { MOCKRECOMMENDATIONS } from '../MOCKRECOMMENDATIONS';
import { Recommendation } from '../recommendations.model';

@Component({
  selector: 'app-recommendation-details',
  standalone: false,
  templateUrl: './recommendation-details.component.html',
  styleUrl: './recommendation-details.component.css'
})
export class RecommendationDetailsComponent {

  recommendation: Recommendation = MOCKRECOMMENDATIONS[0]

}
