import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsontopdfComponent } from './jsontopdf.component';

describe('JsontopdfComponent', () => {
  let component: JsontopdfComponent;
  let fixture: ComponentFixture<JsontopdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsontopdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsontopdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
