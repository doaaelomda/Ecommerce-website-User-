import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducatComponent } from './producat.component';

describe('ProducatComponent', () => {
  let component: ProducatComponent;
  let fixture: ComponentFixture<ProducatComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducatComponent]
    });
    fixture = TestBed.createComponent(ProducatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
