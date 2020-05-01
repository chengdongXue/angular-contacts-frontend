import { Component, OnInit, OnDestroy} from '@angular/core'

@Component({
    selector:'footer-component',
    template:`<div style="position:fixed;bottom:10px;height:50px;ling-height:50px;width:100%;background-color:green;"></div>`
})
export class FooterJapanComponent implements OnInit,OnDestroy {
    
    constructor(){

    }

    public ngOnInit() {

    }

    public ngOnDestroy() {
        
    }
}