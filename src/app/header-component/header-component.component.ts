import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Menu } from './inner/header-menu-inner/menu';
@Component({
  selector: 'header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css']
})
export class HeaderComponentComponent implements OnInit {

@Input() people: [];
public url: string;
public menu: Menu[];

  constructor() { 
    this.url = "https://angular.cn/generated/images/guide/inputs-outputs/input-diagram-target-source.svg";
    this.menu = [
      {
        name: 'Nikko Connect',
        url: 'http://nikko.connect.nikko.co.jp',
        open: true,
      },
      {
        name: 'ガイドラインウェブ',
        url: 'http://nikko.connect.nikko.co.jp',
        open: true,
      },
      {
        name: 'アナリスト・エコノミストレポート',
        url: 'http://nikko.connect.nikko.co.jp',
        open: true,
      },
      {
        name: '日興動画ポータル',
        url: 'http://nikko.connect.nikko.co.jp',
        open: true,
      },
      {
        name: '電子電話帳',
        url: 'http://nikko.connect.nikko.co.jp',
        open: true,
      },
      {
        name: '各商品担当表',
        url: 'http://nikko.connect.nikko.co.jp',
        open: false,
      }
    ];
  }

  ngOnInit() {
    // this.people.forEach((item) => {
    //   console.log(`parent's component passing data to child'scomponent ${item}`);
    // });
    // for(let item in this.people) {
    //   console.log(`parent's component passing data to child'scomponent ${item}`);
    // }
  }
}