import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportDetailInfoComponentComponent } from './report-detail-info-component.component';

describe('ReportDetailInfoComponentComponent', () => {
  let component: ReportDetailInfoComponentComponent;
  let fixture: ComponentFixture<ReportDetailInfoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReportDetailInfoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReportDetailInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
