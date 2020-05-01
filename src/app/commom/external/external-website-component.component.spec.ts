import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExternalWebsiteComponentComponent } from './external-website-component.component';

describe('ExternalWebsiteComponentComponent', () => {
  let component: ExternalWebsiteComponentComponent;
  let fixture: ComponentFixture<ExternalWebsiteComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExternalWebsiteComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExternalWebsiteComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
