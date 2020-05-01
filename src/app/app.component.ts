import { Component, OnInit } from '@angular/core';
import { ConfigService } from './services/config-service';
import { menu } from './menu-entity';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {

  constructor(private configService : ConfigService) {}

  public ngOnInit(){
  }

}
