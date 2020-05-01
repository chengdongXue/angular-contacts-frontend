import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from "rxjs";
import { LoadingScreenService } from '../services/loading-screen.service';

@Component({
  selector: 'loading-screen',
  templateUrl: './loading-screen.component.html',
  styleUrls: ['./loading-screen.component.css']
})
export class LoadingScreenComponent implements OnInit, OnDestroy {

  loading: boolean = false;
  loadingSubscription: Subscription;
  constructor( private loadingService: LoadingScreenService) { }

  ngOnInit() {
    this.loadingSubscription = this.loadingService.loadingStatus.subscribe((value: boolean) => {
      this.loading = value;
    });
  }

  ngOnDestroy() {
    this.loadingSubscription.unsubscribe();
  }

}
