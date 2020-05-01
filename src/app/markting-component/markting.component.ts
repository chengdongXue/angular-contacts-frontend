import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-markting',
  templateUrl: './markting.component.html',
  styleUrls: ['./markting.component.css']
})
export class MarktingComponent implements OnInit {

  constructor() { }

  public sectionStyles = {
    'position':'relative',
    'margin-top':'100px',
    'overflow':'hidden',
  };

  ngOnInit() {
  }

}
