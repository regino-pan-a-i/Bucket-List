import { Pipe, PipeTransform } from '@angular/core';
import { Category, Recommendation } from './recommendations.model';

@Pipe({
  name: 'recommendationFilter',
  standalone: false
})
export class RecommendationFilterPipe implements PipeTransform {

  transform(recommendations: Recommendation[], category: Category): Recommendation[] {
    
    if (category == null){
      return recommendations
    }
    console.log(category)
    const filteredRecommendations = recommendations.filter(
      (rec : Recommendation) => rec.category == category)

    if (filteredRecommendations.length < 1){
      return recommendations
    }
    
    return filteredRecommendations;
  }

}
