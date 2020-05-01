import { Component, OnInit, Input, Output, EventEmitter, ElementRef } from '@angular/core';
import { OutsideClickInterface } from '../../directive/OutsideClickInterface'

@Component({
  selector: 'popup-component',
  templateUrl: './popup-component.component.html',
  styleUrls: ['./popup-component.component.css']
})
export class PopupComponentComponent implements OnInit, OutsideClickInterface {

  @Input() public bookmarkFlag: string;
  @Input() public reportId: string;
  @Input() public userId: string;
  @Output() public update = new EventEmitter<any>();
  @Output() public onOpen = new EventEmitter<any>();
  @Output() public onClosed = new EventEmitter<any>();

  public showPop = false;
  public showBtn = true;
  public message: string;

  constructor() { }

  ngOnInit() {
  }

  public close(): void {
   // this.showOrHidePop(false);
  }

  public showOrHidePop(show: boolean) {
    if (this.showPop === show) {
        return;
    }

    this.showPop = show;
    if (show) {
        this.showBtn = true;
        this.message =  (this.bookmarkFlag === '0') ? '初めましで' : 'これからよるしくお願うします';
        this.onOpen.emit();
    } else {
        this.onClosed.emit();
    }
}

public onClickVote(parm: Object) {
  this.update.emit({
    userId: '001',
    reportId:'1',
    result:'2',
    bookmarkProcessFlg: this.bookmarkFlag = '1' ? '0' : '1'});
    setTimeout(() => {
      this.showOrHidePop(false);
    },1000);
  }

}
