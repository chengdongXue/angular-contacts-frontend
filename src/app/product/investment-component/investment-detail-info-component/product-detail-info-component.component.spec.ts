import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailInfoComponentComponent } from './product-detail-info-component.component';

describe('ProductDetailInfoComponentComponent', () => {
  let component: ProductDetailInfoComponentComponent;
  let fixture: ComponentFixture<ProductDetailInfoComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailInfoComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailInfoComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
