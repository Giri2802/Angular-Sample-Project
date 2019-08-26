import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProxycrudComponent } from './proxycrud.component';

describe('ProxycrudComponent', () => {
  let component: ProxycrudComponent;
  let fixture: ComponentFixture<ProxycrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProxycrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProxycrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
