import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoldPencilsComponent } from './bold-pencils.component';

describe('BoldPencilsComponent', () => {
  let component: BoldPencilsComponent;
  let fixture: ComponentFixture<BoldPencilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoldPencilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoldPencilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
