import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule,scrollPreset } from 'ng-lazyload-image';
import { ExternalWebsiteComponentComponent } from './external-website-component.component';
import { ExternalRouteModule } from './external.route.module'
import { LessonOneComponent } from '../external/japanLanauage/lesson-one/lesson-one.component'
import { LessonTwoComponent } from '../external/japanLanauage/lesson-two/lesson-two.component';
import { WordsComponent } from '../external/japanLanauage/words/words.component';
import { FooterJapanComponent } from './japanLanauage/footer';
import { HeaderJapanComponent } from './japanLanauage/header';
// import { HeaderComponentComponent } from '../../header-component/header-component.component';
// import { HeaderMenuInnerComponent } from '../../header-component/inner/header-menu-inner/header-menu-inner.component';

@NgModule({
    imports: [
        CommonModule,
        ExternalRouteModule,
        LazyLoadImageModule.forRoot({
            preset: scrollPreset // <-- tell LazyLoadImage that you want to use scrollPreset
        }),
    ],
    declarations: [
        ExternalWebsiteComponentComponent,
        LessonOneComponent,
        LessonTwoComponent,
        WordsComponent,
        FooterJapanComponent,
        HeaderJapanComponent
        // HeaderComponentComponent,
        // HeaderMenuInnerComponent
    ],
    exports: [
        RouterModule,
        ExternalWebsiteComponentComponent
    ],
    entryComponents: [
        ExternalWebsiteComponentComponent
    ],
    providers: [
    ]
})
export class ExternalModule {
}
