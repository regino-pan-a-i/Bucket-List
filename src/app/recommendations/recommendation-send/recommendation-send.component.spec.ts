import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationSendComponent } from './recommendation-send.component';

describe('RecommendationSendComponent', () => {
  let component: RecommendationSendComponent;
  let fixture: ComponentFixture<RecommendationSendComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommendationSendComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationSendComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
