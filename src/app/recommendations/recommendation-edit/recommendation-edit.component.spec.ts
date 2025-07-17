import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationEditComponent } from './recommendation-edit.component';

describe('RecommendationEditComponent', () => {
  let component: RecommendationEditComponent;
  let fixture: ComponentFixture<RecommendationEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RecommendationEditComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecommendationEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
