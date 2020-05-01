import { Component, OnInit, OnDestroy} from '@angular/core';

@Component({
    selector:'header-japan',
    template:`<div style="height:50px;ling-height:50px;width:100%;background-color:green;"></div>`
})
export class HeaderJapanComponent implements OnInit, OnDestroy {

    constructor(){

    }

    public ngOnInit() {

    }

    public ngOnDestroy() {

    }

    public sendInfo() {
        return 'Message from ';
    }
}