import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formchild4Component } from './formchild4.component';

describe('Formchild4Component', () => {
  let component: Formchild4Component;
  let fixture: ComponentFixture<Formchild4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formchild4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formchild4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
