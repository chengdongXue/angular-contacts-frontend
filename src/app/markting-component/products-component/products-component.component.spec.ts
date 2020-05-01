import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductsComponentComponent } from './products-component.component';

describe('ProductsComponentComponent', () => {
  let component: ProductsComponentComponent;
  let fixture: ComponentFixture<ProductsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
