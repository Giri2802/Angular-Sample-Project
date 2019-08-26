import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentcommunicationComponent } from './componentcommunication.component';

describe('ComponentcommunicationComponent', () => {
  let component: ComponentcommunicationComponent;
  let fixture: ComponentFixture<ComponentcommunicationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentcommunicationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentcommunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
