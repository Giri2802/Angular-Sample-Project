import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarserviceComponent } from './carservice.component';

describe('CarserviceComponent', () => {
  let component: CarserviceComponent;
  let fixture: ComponentFixture<CarserviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarserviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarserviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
