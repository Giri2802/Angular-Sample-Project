import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PipessampleComponent } from './pipessample.component';

describe('PipessampleComponent', () => {
  let component: PipessampleComponent;
  let fixture: ComponentFixture<PipessampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PipessampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PipessampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
