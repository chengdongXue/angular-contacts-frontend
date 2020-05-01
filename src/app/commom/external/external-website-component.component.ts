import { Component, OnInit } from '@angular/core';
import { resolve } from 'url';

@Component({
  selector: 'external-website-component',
  templateUrl: './external-website-component.component.html',
  styleUrls: ['./external-website-component.component.css']
})
export class ExternalWebsiteComponentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.fun1(this.fun2);
  }

  public fun1(callback) {
    setTimeout(() => {
      callback();
    },1000)
  }

  public fun2(){
    for(let i = 0; i<200; i++){
      console.log(i);
    }
  }

  public fun3(){
    const promise_ = new Promise((resolve,reject) => {
      if(true){
        resolve();
      } else {
        reject();
      }
    });
    promise_.then(() => console.log(1)).catch(() => console.log('throw execption')).finally(() => console.log(`whether exception will be 
    happend or not, it always running!!!`));

    const promiseTwo = new Promise((resolve,reject) => {
      const array = [1,2,3,4,5,6,7];
      array.forEach(element => {
        if (array[2] === 3) {
          resolve(array[2]);
        } else {
          reject(array.filter((item) => {item !== 3}));
        }
      });
    });
    promiseTwo.then((onfulfilled) => {console.log(onfulfilled)},(onrejected) =>{console.log(onrejected)});
  }
}
