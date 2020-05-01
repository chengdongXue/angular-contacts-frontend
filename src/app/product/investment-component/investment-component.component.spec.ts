import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestmentComponentComponent } from './investment-component.component';

describe('InvestmentComponentComponent', () => {
  let component: InvestmentComponentComponent;
  let fixture: ComponentFixture<InvestmentComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InvestmentComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestmentComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
