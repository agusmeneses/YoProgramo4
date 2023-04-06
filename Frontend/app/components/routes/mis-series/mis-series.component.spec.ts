import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisSeriesComponent } from './mis-series.component';

describe('MisSeriesComponent', () => {
  let component: MisSeriesComponent;
  let fixture: ComponentFixture<MisSeriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisSeriesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisSeriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
