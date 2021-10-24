import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphitePencilsComponent } from './graphite-pencils.component';

describe('GraphitePencilsComponent', () => {
  let component: GraphitePencilsComponent;
  let fixture: ComponentFixture<GraphitePencilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GraphitePencilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphitePencilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
