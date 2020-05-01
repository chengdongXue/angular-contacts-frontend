import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoMvcComponent } from './todo-mvc.component';

describe('TodoMvcComponent', () => {
  let component: TodoMvcComponent;
  let fixture: ComponentFixture<TodoMvcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TodoMvcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoMvcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
