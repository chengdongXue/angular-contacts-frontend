import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NormalQuestionsComponentComponent } from './normal-questions-component.component';

describe('NormalQuestionsComponentComponent', () => {
  let component: NormalQuestionsComponentComponent;
  let fixture: ComponentFixture<NormalQuestionsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NormalQuestionsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NormalQuestionsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
