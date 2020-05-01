import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'lesson-one',
    templateUrl: 'lesson-one.component.html',
    styleUrls: ['lesson-one.component.scss']
})
export class LessonOneComponent implements OnInit {
    public defaultImage: string;
    public lazyImage: string;

    constructor(){
        this.defaultImage = 'https://www.placecage.com/1000/1000';
        this.lazyImage = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
    }

    public ngOnInit() {
    }

    public cocatObject() {
        const sourceObj: Object = {a:1,b:2,c:3};
        const targetObj: Object = {d:4};
        console.log(Object.assign(targetObj,sourceObj));
    }

    public _portotype() {
        
    }
}
