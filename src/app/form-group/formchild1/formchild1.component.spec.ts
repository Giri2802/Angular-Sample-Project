import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formchild1Component } from './formchild1.component';

describe('Formchild1Component', () => {
  let component: Formchild1Component;
  let fixture: ComponentFixture<Formchild1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formchild1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formchild1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
