import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TopComponentComponent } from './top-component.component';

describe('TopComponentComponent', () => {
  let component: TopComponentComponent;
  let fixture: ComponentFixture<TopComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TopComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
