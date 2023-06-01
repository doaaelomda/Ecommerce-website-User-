import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpliterComponent } from './spliter.component';

describe('SpliterComponent', () => {
  let component: SpliterComponent;
  let fixture: ComponentFixture<SpliterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpliterComponent]
    });
    fixture = TestBed.createComponent(SpliterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
