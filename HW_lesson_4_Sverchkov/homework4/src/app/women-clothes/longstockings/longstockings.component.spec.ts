import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LongstockingsComponent } from './longstockings.component';

describe('LongstockingsComponent', () => {
  let component: LongstockingsComponent;
  let fixture: ComponentFixture<LongstockingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LongstockingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LongstockingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
