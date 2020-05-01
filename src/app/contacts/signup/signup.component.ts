import { Component, OnInit, OnDestroy ,DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoadingScreenService } from '../common//services/loading-screen.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  // https://www.bilibili.com/video/BV1hj411f7H5?p=49
  // 主要讲解angular表单验证

  // https://www.bilibili.com/video/BV1hj411f7H5?p=50
  // 讲解如何使用NodeJS编写服务端程序

  // https://www.bilibili.com/video/BV1hj411f7H5?p=52
  // 讲解路由守卫

  showMessage: boolean;
  public signUpForm = {
    email:'',
    password:''
  }
  
  constructor( 
    private http: HttpClient,
    private router: Router,
    private loading: LoadingScreenService) {
  }

  ngOnInit() {
    this.loading.startLoading();
  }

  ngOnDestroy() {
    this.showMessage = false;
  }

  ngDoCheck() {
  }

  submitSign(): void {
    let results = this.http.post('http://localhost:3000/users', this.signUpForm).toPromise();
    results.then((data: any) => {
      if (data.token && data.user) {
        this.showMessage = false;
        this.router.navigate(['/signin']);
      }
    }).catch(e => {
      if (e.status === 409) {
        this.showMessage = true;
      }
    });
  }

}
