import { Component } from '@angular/core';
import { MOCKRECOMMENDATIONS } from '../MOCKRECOMMENDATIONS';
import { Category, Recommendation } from '../recommendations.model';

@Component({
  selector: 'app-recommendation-list',
  standalone: false,
  templateUrl: './recommendation-list.component.html',
  styleUrl: './recommendation-list.component.css'
})
export class RecommendationListComponent {

  recommendations : Recommendation[]
  selectedRecommendation : boolean = false

  selectedCategory : Category | null

  ngOnInit(){
    this.recommendations = MOCKRECOMMENDATIONS
    // console.log(this.recommendations)
  }

  filterClick(strCategory: string){
    if (strCategory === "clear"){
      this.selectedCategory = null
    } else {
      this.selectedCategory = strCategory as Category
    }
  }
}
