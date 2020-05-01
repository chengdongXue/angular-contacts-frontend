import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MarktingComponent } from './markting.component';

describe('MarktingComponent', () => {
  let component: MarktingComponent;
  let fixture: ComponentFixture<MarktingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MarktingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MarktingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
