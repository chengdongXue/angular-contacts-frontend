import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'normal-questions-component',
  templateUrl: './normal-questions-component.component.html',
  styleUrls: ['./normal-questions-component.component.css']
})
export class NormalQuestionsComponentComponent implements OnInit {

  bookmarkFlag: string = '0';
  bookmarkSecondFlag: string = '0';
  reportId: string = '2';
  userId: string = '3';

  constructor() { }

  ngOnInit() {
  }

  public updateBookmarkFlg(info: any) {
    this.bookmarkFlag = '1';
  }

  public updateBookmarkSecondFlg(info: any) {
    this.bookmarkSecondFlag = '1';
  }

  public onBookmarkPopupOpen(info: any): void {
  }

  public onBookmarkPopupClosed(info: any): void {
  }

}
