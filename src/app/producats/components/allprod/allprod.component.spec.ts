import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllprodComponent } from './allprod.component';

describe('AllprodComponent', () => {
  let component: AllprodComponent;
  let fixture: ComponentFixture<AllprodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllprodComponent]
    });
    fixture = TestBed.createComponent(AllprodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
