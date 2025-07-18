import { Component } from '@angular/core';
import { MOCKRECOMMENDATIONS } from '../MOCKRECOMMENDATIONS';
import { Recommendation } from '../recommendations.model';

@Component({
  selector: 'app-recommendation-list',
  standalone: false,
  templateUrl: './recommendation-list.component.html',
  styleUrl: './recommendation-list.component.css'
})
export class RecommendationListComponent {

  recommendations : Recommendation[]
  selectedRecommendation : boolean = false

  ngOnInit(){
    this.recommendations = MOCKRECOMMENDATIONS
    console.log(this.recommendations)
  }
}
