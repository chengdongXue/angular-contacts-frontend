import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportsComponentComponent } from './reports-component.component';

describe('ReportsComponentComponent', () => {
  let component: ReportsComponentComponent;
  let fixture: ComponentFixture<ReportsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
