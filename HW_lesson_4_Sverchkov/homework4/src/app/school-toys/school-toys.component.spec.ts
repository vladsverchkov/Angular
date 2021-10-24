import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchoolToysComponent } from './school-toys.component';

describe('SchoolToysComponent', () => {
  let component: SchoolToysComponent;
  let fixture: ComponentFixture<SchoolToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchoolToysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchoolToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
