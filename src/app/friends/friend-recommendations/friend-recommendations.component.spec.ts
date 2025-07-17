import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FriendRecommendationsComponent } from './friend-recommendations.component';

describe('FriendRecommendationsComponent', () => {
  let component: FriendRecommendationsComponent;
  let fixture: ComponentFixture<FriendRecommendationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FriendRecommendationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FriendRecommendationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
