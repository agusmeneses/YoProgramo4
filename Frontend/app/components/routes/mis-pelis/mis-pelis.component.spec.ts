import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MisPelisComponent } from './mis-pelis.component';

describe('MisPelisComponent', () => {
  let component: MisPelisComponent;
  let fixture: ComponentFixture<MisPelisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MisPelisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MisPelisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
