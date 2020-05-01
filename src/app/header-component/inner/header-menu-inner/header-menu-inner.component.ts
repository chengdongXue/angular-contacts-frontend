import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Menu} from './menu';

@Component({
  selector: 'header-menu-inner',
  templateUrl: './header-menu-inner.component.html',
  styleUrls: ['./header-menu-inner.component.css']
})
export class HeaderMenuInnerComponent implements OnInit {

  @Input() menu: Menu[];
  constructor() {
    
  }

  ngOnInit() {
    this.menu.filter((item) => {
      if (item['open']) {
        console.log(`Yeap, You have rules to access!`);
      } else {
        console.log(`You are not have any rule to access!`);
      }
    });
  }

}