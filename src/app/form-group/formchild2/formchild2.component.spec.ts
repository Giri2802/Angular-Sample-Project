import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Formchild2Component } from './formchild2.component';

describe('Formchild2Component', () => {
  let component: Formchild2Component;
  let fixture: ComponentFixture<Formchild2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Formchild2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Formchild2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
