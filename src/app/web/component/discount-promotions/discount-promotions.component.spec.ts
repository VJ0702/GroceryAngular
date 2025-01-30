import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountPromotionsComponent } from './discount-promotions.component';

describe('DiscountPromotionsComponent', () => {
  let component: DiscountPromotionsComponent;
  let fixture: ComponentFixture<DiscountPromotionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiscountPromotionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiscountPromotionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
