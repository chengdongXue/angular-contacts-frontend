import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from '@angular/router'

@Component({
  selector: 'app-investment-component',
  templateUrl: './investment-component.component.html',
  styleUrls: ['./investment-component.component.css']
})
export class InvestmentComponentComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((item) => {
      console.log(item);
    });
  }

}
