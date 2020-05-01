import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NavigateLinkDirective } from './directive/navigate-link.directive';
import { OutsideClickDirective } from './directive/outside-click.directive';

import { LoadingScreenService } from './contacts/common/services/loading-screen.service';
import { AuturoleGuard } from './contacts/common/auturole.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopInterceptor } from './contacts/common/authIntercepted';

import { AppComponent } from './app.component';
import { DetailsComponent } from './details-component/details.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { HeaderMenuInnerComponent } from './header-component/inner/header-menu-inner/header-menu-inner.component';
import { HeaderTabsComponent } from './header-component/inner/header-tabs/header-tabs.component';
import { ConfigService } from './services/config-service';
import { MarktingComponent } from './markting-component/markting.component';
import { TopComponentComponent } from './top-component/top-component.component';
import { ProductsComponentComponent } from './markting-component/products-component/products-component.component';
import { NormalQuestionsComponentComponent } from './markting-component/normal-questions-component/normal-questions-component.component';
import { PageNotFoundComponentComponent } from './commom/page-not-found-component/page-not-found-component.component';
import { InvestmentComponentComponent } from './product/investment-component/investment-component.component';
import { ReportsComponentComponent } from './product/reports-component/reports-component.component';
import { ReportDetailInfoComponentComponent } from './product/reports-component/report-detail-info-component/report-detail-info-component.component';
import { ProductDetailInfoComponentComponent } from './product/investment-component/investment-detail-info-component/product-detail-info-component.component';
import { PopupComponentComponent } from './commom/popup-component/popup-component.component';
import { TodoMvcComponent } from './todo-mvc/todo-mvc.component';
import { SigninComponent } from './contacts/signin/signin.component';
import { SignupComponent } from './contacts/signup/signup.component';
import { NavbarComponent } from './contacts/navbar/navbar.component';
import { SidebarComponent } from './contacts/sidebar/sidebar.component';
import { TagListComponent } from './contacts/tag-list/tag-list.component';
import { TagNewComponent } from './contacts/tag-new/tag-new.component';
import { TagEditComponent } from './contacts/tag-edit/tag-edit.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { ContactNewComponent } from './contacts/contact-new/contact-new.component';
import { ContactEditComponent } from './contacts/contact-edit/contact-edit.component';
import { LayoutComponent } from './contacts/layout/layout.component';
import { LoadingScreenComponent } from './contacts/common/loading-screen/loading-screen.component';

const appRoutes: Routes = [
  
  /** Here is contact's module */
  { path: 'layout',  component: LayoutComponent },
  { path: 'signin',  component: SigninComponent },
  { path: 'signup',  component: SignupComponent },
  {
    // 当我们访问contacts路由的时候，会把父组件layoutComponent给渲染出来
    // 然后把children子路由中的path为空的路由渲染到layoutComponent画面中router-outlet路由出口上去
    path: 'contacts',
    component: LayoutComponent,
    // 使用路由守卫来判断用户是否成功登陆
    canActivate: [AuturoleGuard],
    children: [
      {
        path: '',
        component: ContactListComponent
      },{
        // 这里的new是指/contacts/new路由路径，父路由+子路由
        path : 'new',
        component: ContactNewComponent
      },{
        path: 'edit',
        component: ContactEditComponent
      }
    ]
  },
  {
    // refer to above description
    path: 'tags',
    component: LayoutComponent,
    canActivate: [AuturoleGuard],
    children: [
      {
        path: '',
        component: TagListComponent
      },{
        path : 'new',
        component: TagNewComponent
      },{
        path: 'edit',
        component: TagEditComponent
      }
    ]
  },
   /** Here is contact's module */

  /** Here is todoList component */
  { path: 'todoMVC',  component: TodoMvcComponent },
  /** Here is todoList component */

  { path: 'top',  component: TopComponentComponent },
  { path: 'markting', component: MarktingComponent },
  { path: 'pageNotfound', component: PageNotFoundComponentComponent },
  {
    path: 'reports', 
    component: ReportsComponentComponent,
    children: [
      {
        // 路由器会把这些路由对应的组件放在 ReportsComponentComponent 的 RouterOutlet 中，
        // 而不是 AppComponent 壳组件中的。
        path:':id',
        component: ReportDetailInfoComponentComponent
      }
    ]
  },
  {
    path: 'investment', 
    component: InvestmentComponentComponent, 
    data: {investId:'investName'}, 
    children: [
      {
        // 路由器会把这些路由对应的组件放在 ReportsComponentComponent 的 RouterOutlet 中，
        // 而不是 AppComponent 壳组件中的。
        path:':id',
        component: ProductDetailInfoComponentComponent
      }
   ]
  },
  // lazy loading, which is only touch route that loading the module
  { path: 'external', loadChildren:'./commom/external/external.module#ExternalModule'},
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
  { path: '**', redirectTo: 'pageNotfound' }
];

@NgModule({
  imports:
  [
    // 获取浏览器的特有的服务
    BrowserModule,
    FormsModule,
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
     // { enableTracing: true } //<-- debugging purposes only
    )
  ],
  declarations: [ AppComponent, DetailsComponent, HeaderComponentComponent, 
    HeaderMenuInnerComponent, NavigateLinkDirective,OutsideClickDirective, HeaderTabsComponent, MarktingComponent, TopComponentComponent,
     ProductsComponentComponent, NormalQuestionsComponentComponent, PageNotFoundComponentComponent, InvestmentComponentComponent,
      ReportsComponentComponent, ReportDetailInfoComponentComponent, ProductDetailInfoComponentComponent, PopupComponentComponent, 
      TodoMvcComponent, SigninComponent, SignupComponent, NavbarComponent, SidebarComponent, TagListComponent,
       TagNewComponent, TagEditComponent, ContactListComponent, ContactNewComponent, ContactEditComponent,
        LayoutComponent, LoadingScreenComponent
    ],
  providers:[{
    provide: HTTP_INTERCEPTORS,
    useClass: NoopInterceptor,
    multi: true
  },ConfigService, LoadingScreenService, AuturoleGuard],
  // 根组件,Angular创建它并插入,index.html宿主页面
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
