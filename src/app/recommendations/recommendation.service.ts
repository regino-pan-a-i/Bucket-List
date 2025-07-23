import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recommendation } from './recommendations.model';
import { Subject } from 'rxjs';
import { MOCKRECOMMENDATIONS } from './MOCKRECOMMENDATIONS';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  recommendationListChange = new Subject<Recommendation[]>

  recommendations : Recommendation [] = []

  @Output()  recommendationChangedEvent= new EventEmitter<Recommendation>
  @Output()  recommendationSelectedEvent= new EventEmitter<Recommendation>
  maxRecommendationId: number


  constructor(private httpClient: HttpClient) { 
    this.maxRecommendationId = this.getMaxId()
    this.httpClient
      .get('http://localhost:3000/recommendations')
      .subscribe((recommendations: any) => {
          if (recommendations) {
            this.recommendations = Object.values(recommendations) as Recommendation[];
          } else {
            this.recommendations = [];
          }
          this.maxRecommendationId = this.getMaxId()
          // sort the list of recommendations
          this.recommendations.sort()
          // emit the next document list change event
          this.recommendationListChange.next(this.recommendations)
        },
        // error method
        (error: any) => {
            throw error;
        } 
      )
  }


  addRecommendation(recommendation: Recommendation) {
      if (!recommendation) {
        return;
      }
  
      // make sure id of the new Recommendation is empty
      recommendation.id = '';
  
      const headers = new HttpHeaders({'Content-Type': 'application/json'});
  
      // add to database
      this.httpClient.post<{ message: string, recommendation: Recommendation }>('http://localhost:3000/recommendations',
        recommendation,
        { headers: headers })
        .subscribe(
          (responseData) => {
            // add new document to documents
            this.recommendations.push(responseData.recommendation);
          }
      );
    }

  getRecommendations(): Recommendation[] {
    return this.recommendations.slice();
  }

  getRecommendation(id: string): Recommendation | null {
    const recommendation = this.recommendations.find(recommendation => recommendation.id === id);
    return recommendation ? recommendation : null;
  }


  updateRecommendation(originalRecommendation: Recommendation | null, newRecommendation: Recommendation) {
    if (!originalRecommendation || !newRecommendation) {
      return;
    }

    const pos = this.recommendations.findIndex(d => d.id === originalRecommendation.id);

    if (pos < 0) {
      return;
    }

    // set the id of the new Recommendation to the id of the old Recommendation
    newRecommendation.id = originalRecommendation.id;
    // newRecommendation._id = originalRecommendation._id;

    const headers = new HttpHeaders({'Content-Type': 'application/json'});

    // update database
    this.httpClient.put('http://localhost:3000/recommendations/' + originalRecommendation.id,
      newRecommendation, { headers: headers })
      .subscribe(
        (responseData) => {
          this.recommendations[pos] = newRecommendation;
          // this.sortAndSend();
        }
      );
  }


  getMaxId(): number {
    let maxId = 0;

    console.log(this.recommendations)
    this.recommendations.forEach(recommendation=> {
      const currentId = +recommendation.id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    });

    return maxId;
  }

  deleteRecommendation(recommendation: Recommendation | null) {
  
      if (!recommendation) {
        return;
      }
  
      const pos = this.recommendations.findIndex(d => d.id === recommendation.id);
  
      if (pos < 0) {
        return;
      }
  
      // delete from database
      this.httpClient.delete('http://localhost:3000/recommendations/' + recommendation.id)
        .subscribe(
          (responseData) => {
            this.recommendations.splice(pos, 1);
            // this.sortAndSend();
          }
        );
    }
}
