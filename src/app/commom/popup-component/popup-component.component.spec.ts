import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupComponentComponent } from './popup-component.component';

describe('PopupComponentComponent', () => {
  let component: PopupComponentComponent;
  let fixture: ComponentFixture<PopupComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopupComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
