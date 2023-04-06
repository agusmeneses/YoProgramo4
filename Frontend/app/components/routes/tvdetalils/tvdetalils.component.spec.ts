import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvdetalilsComponent } from './tvdetalils.component';

describe('TvdetalilsComponent', () => {
  let component: TvdetalilsComponent;
  let fixture: ComponentFixture<TvdetalilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvdetalilsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvdetalilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
