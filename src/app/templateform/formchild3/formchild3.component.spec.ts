import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formchild3Component } from './formchild3.component';

describe('Formchild3Component', () => {
  let component: Formchild3Component;
  let fixture: ComponentFixture<Formchild3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formchild3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formchild3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
