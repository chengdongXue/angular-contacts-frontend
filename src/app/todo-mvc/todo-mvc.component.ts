import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-todo-mvc',
  templateUrl: './todo-mvc.component.html',
  styleUrls: ['./todo-mvc.component.css']
})
export class TodoMvcComponent implements OnInit, OnDestroy, DoCheck {
  // https://www.bilibili.com/video/BV1hj411f7H5?p=43
  public lastIndex: number = 0;
  public visible: string = 'all';
  public todoList: Array<Item> = [
    {
      itemId: 1,
      itemTitle: 'Taste JavaScript',
      bindClassName: 'completed',
      itemChecked: true,
      itemInputVal:'Create a TodoMVC template'
    },{
      itemId: 2,
      itemTitle: 'Buy a unicorn',
      bindClassName: 'completed',
      itemChecked: false,
      itemInputVal:'Create a TodoMVC template'
    },{
      itemId: 3,
      itemTitle: 'Buy beautiful house',
      bindClassName: 'completed',
      itemChecked: true,
      itemInputVal:'Create a TodoMVC template'
    },{
      itemId: 4,
      itemTitle: 'Interview first company',
      bindClassName: 'completed',
      itemChecked: true,
      itemInputVal:'Create a TodoMVC template'
    },{
      itemId: 5,
      itemTitle: 'Interview second company',
      bindClassName: 'completed',
      itemChecked: false,
      itemInputVal:'Create a TodoMVC template'
    },{
      itemId: 6,
      itemTitle: 'Interview three times company',
      bindClassName: 'completed',
      itemChecked: false,
      itemInputVal:'Create a TodoMVC template'
    },{
      itemId: 7,
      itemTitle: 'Interview four times company',
      bindClassName: 'completed',
      itemChecked: false,
      itemInputVal:'Create a TodoMVC template'
    }
  ];
  
  public actionKeywords: Array<string> = [
    'all',
    'completed',
    'active'
  ]

  public currentEditing: {
    itemId: number,
    itemTitle: string,
    bindClassName: string,
    itemChecked: boolean,
    itemInputVal: string
  } = null

  constructor() { }

  // angular 组件初始化钩子函数执行
  ngOnInit() {
  }

  // 当angular 组件数据发送变化，ngDoCheck钩子函数就会被触发
  ngDoCheck() {
  }

  ngOnDestroy() {
  }

  /**
   * add new item to todoList
   * @param event 
   */
  addItemTodoList(event): void {
    console.log(`you entered keycode is ${event.keycode}`);
    if (this.todoList.length != 0) {
      this.lastIndex = (this.todoList[this.todoList.length - 1].itemId) + 1;
    }
    let newItem: Item = {
      itemId: this.lastIndex,
      itemTitle: event.target.value,
      bindClassName: '',
      itemChecked: true,
      itemInputVal:'Create a TodoMVC template'
    };
    this.todoList.push(newItem);
    // clean text value
    event.target.value = '';
  }

  // 通过类成员的访问器和赋值器
  // 当访问的时候调用这个属性
  get toggleAll () {
    return this.todoList.every(t => t.itemChecked);
  }
  // 当赋值的时候调用这个属性
  set toggleAll (val) {
    this.todoList.forEach(t => t.itemChecked = val);
  }

  /**
   * remove specific item according to itemId
   * @param id 
   */
  removeItem(id: number) {
    if (this.todoList.length > 0) {
      /*
       * splice(index,num); 
         index代表的是数组元素的下标位置，num代表的是删除的个数  
         findIndex();   是找到某元素的下标的位置
       */
      this.todoList.splice(this.todoList.findIndex(item => item.itemId === id), 1);
    }
  }

  saveEdit(item: Item, event) {
    item.itemTitle = event.target.value;
    this.currentEditing = null;
  }

  cancelHanderEdit(event) {
    // 使用解构赋值
    let { keyCode } = event;
    if (keyCode === 27) {
      // 用户按下Esc，取消了编辑
      this.currentEditing = null;
    }
  }

  get remaining(): number {
    return this.todoList.filter(t => !t.itemChecked).length;
  }

  get filterTodoList () {
    if (this.visible === this.actionKeywords[0]) {
      return this.todoList;
    } else if (this.visible === this.actionKeywords[1]) {
      return this.todoList.filter(t => !t.itemChecked);
    } else if (this.visible === this.actionKeywords[2]) {
      return this.todoList.filter(t => t.itemChecked);
    }
  }

  /**
   * 清除所有已完成的项目
   */
  cleanCompleted() {
    this.todoList = this.todoList.filter(t => !t.itemChecked);
  }

  // 通过click来显示全选和反选
  // (click)="checkAll($event)"
  checkAll(event) {
    let check = true;
    if (this.todoList.length > 0) {
      if (!event.target.checked) {
        check = false;
      }
      this.todoList.forEach((item: Item) => {
        item.itemChecked = check;
      });
    }
  }

  filterItems(filterItem) {
    if (filterItem) {
      this.visible = filterItem;
    } else {
      throw new Error('你的参数有问题！！！');
    }
  }

}
