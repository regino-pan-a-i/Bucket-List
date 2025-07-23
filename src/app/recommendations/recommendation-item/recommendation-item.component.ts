import { Component, Input } from '@angular/core';
import { Recommendation } from '../recommendations.model';

@Component({
  selector: 'app-recommendation-item',
  standalone: false,
  templateUrl: './recommendation-item.component.html',
  styleUrl: './recommendation-item.component.css'
})
export class RecommendationItemComponent {

  @Input() recommendation! : Recommendation

  ngOnInit(){
    // console.log(this.recommendation)
  }
}
