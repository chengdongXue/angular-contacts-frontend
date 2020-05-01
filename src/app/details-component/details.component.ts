import { Component, OnInit,Input,Output, EventEmitter, OnChanges, SimpleChange } from '@angular/core';
@Component({
  selector: 'detail-component',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  public title: string;
  public url: string;
  @Input() name: string;
  @Input() job: string;
  @Input() country: string;
  @Input() description: string;
  @Input() items: object;
  @Input() prefix: string;
   // 该属性需要从父组件传递过来
  @Input() inputString: string;
  @Output() newItemEvent = new EventEmitter<string>();

  constructor() {
    this.title = 'ぶんけい';
    this.name = '';
    this.url ='https://angular.cn/generated/images/guide/inputs-outputs/input-output-diagram.svg';
  }

  public ngOnInit() {

  }

  // 拦截inputString的变化,并且把他变成大写
  public ngOnChanges(changes: { [propKey: string]: SimpleChange }) {
    for (const propName in changes) {
      if (changes.hasOwnProperty(propName)) {
        const changedProp = changes[propName];
        const to = JSON.stringify(changedProp.currentValue);
        // 我们这里只想要inputString属性的变化
        if (propName === 'inputString') {
          if (changedProp.isFirstChange()) {
            // 第一次数据设置
          } else {
            // 不是第一次
          }
          this.inputString = to.toUpperCase();
        }
      }
    }
  }

  public addNewItem(value: string) {
    this.newItemEvent.emit(value);
  }

}