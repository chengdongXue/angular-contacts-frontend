import { Component, OnInit, OnDestroy ,DoCheck } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit, OnDestroy {
  
  showMessage: boolean;
  public signUpForm = {
    email:'',
    password:''
  }
  
  constructor( 
    private http: HttpClient,
    private router: Router) {
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.showMessage = false;
  }

  ngDoCheck() {
  }

  submitSign(): void {
    let results = this.http.post('http://localhost:3000/session', this.signUpForm).toPromise();
    results.then((data: any) => {
      if (data.token && data.user) {
        this.showMessage = false;
        window.localStorage.setItem('auth_token', data.token);
        window.localStorage.setItem('user_info', JSON.stringify(data.user));
        this.router.navigate(['/contacts']);
      }
    }).catch(e => {
      if (e.status === 401) {
        this.showMessage = true;
      }
    });
  }
}
