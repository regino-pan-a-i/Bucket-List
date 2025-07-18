import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RecommendationItemComponent } from './recommendations/recommendation-item/recommendation-item.component';
import { RecommendationDetailsComponent } from './recommendations/recommendation-details/recommendation-details.component';
import { RecommendationEditComponent } from './recommendations/recommendation-edit/recommendation-edit.component';
import { RecommendationListComponent } from './recommendations/recommendation-list/recommendation-list.component';
import { RecommendationFormComponent } from './recommendations/recommendation-form/recommendation-form.component';
import { RecommendationSendComponent } from './recommendations/recommendation-send/recommendation-send.component';
import { FriendListComponent } from './friends/friend-list/friend-list.component';
import { FriendItemComponent } from './friends/friend-item/friend-item.component';
import { FriendDetailsComponent } from './friends/friend-details/friend-details.component';
import { FriendRecommendationsComponent } from './friends/friend-recommendations/friend-recommendations.component';
import { FriendAddComponent } from './friends/friend-add/friend-add.component';
import { ProfileLoginComponent } from './profile/profile-login/profile-login.component';
import { ProfileDetailsComponent } from './profile/profile-details/profile-details.component';
import { ProfileEditComponent } from './profile/profile-edit/profile-edit.component';
import { NavbarComponent } from './navbar.component';
import { RecommendationsComponent } from './recommendations/recommendations.component';

@NgModule({
  declarations: [
    AppComponent,
    RecommendationItemComponent,
    RecommendationDetailsComponent,
    RecommendationEditComponent,
    RecommendationListComponent,
    RecommendationFormComponent,
    RecommendationSendComponent,
    FriendListComponent,
    FriendItemComponent,
    FriendDetailsComponent,
    FriendRecommendationsComponent,
    FriendAddComponent,
    ProfileLoginComponent,
    ProfileDetailsComponent,
    ProfileEditComponent,
    NavbarComponent,
    RecommendationsComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
