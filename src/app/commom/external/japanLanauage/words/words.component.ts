import { Component,OnInit,OnDestroy } from '@angular/core';

@Component({
    selector: 'words',
    templateUrl: 'words.component.html',
    styleUrls: ['words.component.scss']
})
export class WordsComponent implements OnInit, OnDestroy {

    constructor(){
        // 1
        console.log(`I'm constructor initial here`);
    }

    public ngOnInit() {
       // this.fun1(this.fun2);
       // this.fun3();
       // console.log(`I'm first ngOnInit initial here`);
    }

    public fun1(callback) {
        setTimeout(() => {
            callback();
        },1000)
    }

    public fun2() {
        // 9
        console.log(`1111111111111111111`);
    }

    public fun3() {
        let promise_ = new Promise((resolve,reject) => {
            // 2
            console.log(`222222222222222222`);
            for(var i =0; i<10; i++) {
                if (i === 5) {
                    // 3
                    console.log(`333333333333333333`);
                } else if (i === 8) {
                    resolve(i);
                } else if (i === 9) {
                    reject(i);
                }
            }
            // 4
            console.log(`4444444444444444444444`);
        });
        promise_
        .then(() => {
            // 8
            console.log(`5555555555555`);
        }).then(() => {
            // 9
            console.log(`666666666666666`);
        }).catch(() => {
            console.log(`whether throw exception or not?`);
        }).finally(() => {
            // 6
            console.log(`777777777777777`);
        });
        // 7
        console.log(`8888888888888888888888`);
    }

    public ngOnDestroy() {
        // it is execute the method when you leave the component
        console.log(`I will ngOnDestroy the component which is destory unless source`);
    }
}
