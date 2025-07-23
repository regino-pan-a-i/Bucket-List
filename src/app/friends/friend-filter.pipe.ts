import { Pipe, PipeTransform } from '@angular/core';
import { Recommendation } from '../recommendations/recommendations.model';
import { Friend } from './friends.model';

@Pipe({
  name: 'friendFilter',
  standalone: false
})
export class FriendFilterPipe implements PipeTransform {

  transform(recommendations: Recommendation[], friend: Friend): Recommendation[] {
    
    // Add null/undefined checks
    if (!recommendations || !friend || !friend.recommendedItems) {
      console.log('Missing data:', { recommendations: !!recommendations, friend: !!friend, recommendedItems: !!friend?.recommendedItems });
      return [];
    }
    
    // console.log('Total recommendations:', recommendations.length);
    // console.log('Friend recommended items:', friend.recommendedItems.length);
    // console.log('Friend name:', friend.name);
    
    const filteredRecommendations = recommendations.filter(
      (rec: Recommendation) => this.compareRecommendations(rec, friend.recommendedItems)
    )
    
    console.log(friend.name, 'filtered results:', filteredRecommendations.length)
    if (filteredRecommendations.length < 1){
      return []
    }
    
    return filteredRecommendations;
  }

  compareRecommendations(x: Recommendation, y: Recommendation[]): boolean {
    return y.some(friendRec => {
      if (x.id === friendRec.id) {
        console.log('found a match for:', x.title);
        return true;
      }
      return false;
    });
  }
}
