import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColourPencilsComponent } from './colour-pencils.component';

describe('ColourPencilsComponent', () => {
  let component: ColourPencilsComponent;
  let fixture: ComponentFixture<ColourPencilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColourPencilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColourPencilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
