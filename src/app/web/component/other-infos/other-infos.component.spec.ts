import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtherInfosComponent } from './other-infos.component';

describe('OtherInfosComponent', () => {
  let component: OtherInfosComponent;
  let fixture: ComponentFixture<OtherInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtherInfosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OtherInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
