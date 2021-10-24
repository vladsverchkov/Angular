import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ElectronicToysComponent } from './electronic-toys.component';

describe('ElectronicToysComponent', () => {
  let component: ElectronicToysComponent;
  let fixture: ComponentFixture<ElectronicToysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ElectronicToysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ElectronicToysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
