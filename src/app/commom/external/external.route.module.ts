import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExternalWebsiteComponentComponent } from './external-website-component.component';
import { LessonOneComponent } from '../external/japanLanauage/lesson-one/lesson-one.component'
import { LessonTwoComponent } from '../external/japanLanauage/lesson-two/lesson-two.component';
import { WordsComponent } from '../external/japanLanauage/words/words.component';

export const ROUTES: Routes = [
    {
        path: 'articles',  
        component: ExternalWebsiteComponentComponent,
        children: [
            {
                path: 'garmmer/id', component: LessonOneComponent
            },{
                path: 'converstion/id', component: LessonTwoComponent
            },{
                path: 'word/id', component: WordsComponent
            }
        ]
    },
    { path: '', redirectTo: '/articles', pathMatch: 'full' },
];

@NgModule({
    imports: [
        RouterModule.forChild(ROUTES)
    ],
    exports: [
        RouterModule
    ]
  }
)
export class ExternalRouteModule { }
