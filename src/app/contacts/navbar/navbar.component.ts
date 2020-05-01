import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: any = {};
  constructor(private http: HttpClient, private router: Router) {
    this.user = JSON.parse(window.localStorage.getItem('user_info'));
  }

  ngOnInit() {
  }

  signout(e) {
    // 阻止事件发生
    e.preventDefault();
    this.http.delete('http://localhost:3000/session').toPromise()
    .then((status) => {
      if (status) {
        window.localStorage.removeItem('auth_token');
        window.localStorage.removeItem('user_info');
        this.router.navigate(['/signin']);
      }
    }).catch( error => alert('退出失败，请重试！！！'))
  }
}
