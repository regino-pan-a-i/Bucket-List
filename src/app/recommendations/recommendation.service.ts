import { EventEmitter, Injectable, Output } from '@angular/core';
import { Recommendation } from './recommendations.model';
import { Subject } from 'rxjs';
import { MOCKRECOMMENDATIONS } from './MOCKRECOMMENDATIONS';

@Injectable({
  providedIn: 'root'
})
export class RecommendationService {

  recommendationListChange = new Subject<Recommendation[]>

  @Output()  recommendationChangedEvent= new EventEmitter<Recommendation>
  @Output()  recommendationSelectedEvent= new EventEmitter<Recommendation>
  constructor() { }


  getRecommendations(){
    return MOCKRECOMMENDATIONS as Recommendation []
  }
}
