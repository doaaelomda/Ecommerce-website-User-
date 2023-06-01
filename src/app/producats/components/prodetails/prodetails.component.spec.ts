import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdetailsComponent } from './prodetails.component';

describe('ProdetailsComponent', () => {
  let component: ProdetailsComponent;
  let fixture: ComponentFixture<ProdetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdetailsComponent]
    });
    fixture = TestBed.createComponent(ProdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
