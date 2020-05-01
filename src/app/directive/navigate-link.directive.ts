import { Directive,ElementRef,EventEmitter,HostListener, Input, Output, OnInit, OnChanges, OnDestroy } from '@angular/core';
import { Menu } from '../header-component/inner/header-menu-inner/menu';
import { ajax } from 'rxjs/ajax';
import { Observable, from, interval, fromEvent} from 'rxjs'

@Directive({
  selector: '[appNavigateLink]'
})
export class NavigateLinkDirective {

  @Input('link')
  private link: string;
  @Input('param')
  private param: Menu;
  @Input('url')
  private url: string;

  constructor() { }

  OnInit() {
    console.log(`${this.link}`.concat(this.url));
    console.log(this.param.open);
  }

  @HostListener('click')
  public onClick() {
     // To create observable that will create an ajax request to mock json or call remote server.
     const observableAjax = ajax.get('./assets/mock/links.json');
     // call observable that perform specific logic in code block.
     observableAjax.subscribe(res => {
       // receving results from sources of anywhere.
       // console.log(res.status,res.response)
       if (res.status && res.response instanceof Array) {

        // how to use map in ES6 technology
        // res.response.map((item,index) => {
        //   console.log(item['name']);
        // });

        // How to use filter in ES6
         res.response.filter(item => {
           if (item.open) {
             console.log(item.name);
           }
         });

        // how to use forEach in ES6
        //  res.response.forEach((item,index) => {
        //    console.log(item.name);
        //  });
       }
     }, 
     error => {
       // it is execute code here if request failed or something.
       console.log(error)
    });
     // this.implementObservable();
  }

  private implementObservable() {
    const locations = new Observable((observer) => {
      let watchId: number;
      if ('geolocation' in navigator) {
        watchId = navigator.geolocation.watchPosition((position: Position) => {
          // next is requirement
          observer.next(position);
        }, (error: PositionError) => {
          observer.error(error);
        });
      } else {
        observer.error('Geolocation not available');
      }
      
      return {
        unsubscribe() {
          navigator.geolocation.clearWatch(watchId);
        }
      }
    });

    const locationSubScription = locations.subscribe({
      next(position){
        console.log('Current Position: ', position);
      }, error(msg) {
        console.log('Error Getting Location: ', msg);
      }
    })

    setTimeout(() => {
      locationSubScription.unsubscribe();
    },10000);
  }

}