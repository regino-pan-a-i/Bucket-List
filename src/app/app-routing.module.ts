import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecommendationsComponent } from './recommendations/recommendations.component';
import { FriendsComponent } from './friends/friends.component';
import { RecommendationDetailsComponent } from './recommendations/recommendation-details/recommendation-details.component';
import { RecommendationFormComponent } from './recommendations/recommendation-form/recommendation-form.component';
import { RecommendationEditComponent } from './recommendations/recommendation-edit/recommendation-edit.component';
import { FriendAddComponent } from './friends/friend-add/friend-add.component';
import { FriendDetailsComponent } from './friends/friend-details/friend-details.component';
import { FriendRecommendationsComponent } from './friends/friend-recommendations/friend-recommendations.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/friends', pathMatch: 'full' }, // redirect root to /login page
  { path: 'recommendations', component: RecommendationsComponent, 
    children: [  
      { path: 'new', component: RecommendationFormComponent },
      { path: ':id', component: RecommendationDetailsComponent },
      { path: ':id/edit', component: RecommendationEditComponent }
    ]
  },
  { path: 'friends', component: FriendsComponent },
  { path: 'profile', component: ProfileComponent }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
