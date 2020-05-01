import { Component, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { ConfigService } from '../services/config-service';
import { menu } from '../menu-entity';

@Component({
  selector: 'app-top-component',
  templateUrl: './top-component.component.html',
  styleUrls: ['./top-component.component.css']
})
export class TopComponentComponent implements OnInit {
  
    public showOrHideDetails;
    public name: string = '（かいわ）';
    public description: string = 'description';
    public people_arr = ['people_name', 'people_job', 'people_country'];
    public items = ['薛さん'];
    public url: string;
    public people_entity;
    public people_array: menu[];
    public inputString: string;

    public sectionStyles = {
      'position':'relative',
      'margin-top':'80px',
      'overflow':'hidden',
    };

  constructor(private configService : ConfigService) {
    this.people_entity = {};
    this.showOrHideDetails = false;
    this.url = 'https://angular.cn/generated/images/guide/inputs-outputs/input-diagram-target-source.svg';
  }

  public ngOnInit(){
    // clone the data object, using its known menu shape
    this.configService.getLinks().subscribe((data:menu) => {
      if (data instanceof Array) {
        this.people_array = data;
      }
    });
  }

  public ngOnDestroy(){
  }

  public ngOnChanges(){
  }

  public addItem(newItem: string) {
    this.items.push(newItem);
  }

  public showpersoanl(people_:any = {}): void {
    this.people_entity = people_;
    if(!this.people_entity) {
      this.showOrHideDetails = false;
    } else {
      this.showOrHideDetails = true;
    }
  }

  public onValueChangeClick() {
    this.inputString = 'Changed';
  }

}
