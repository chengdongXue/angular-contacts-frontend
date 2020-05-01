import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-new',
  templateUrl: './contact-new.component.html',
  styleUrls: ['./contact-new.component.css']
})
export class ContactNewComponent implements OnInit {

  public newContact = {
    email:'',
    phone:'',
    name:''
  }
  constructor(private http: HttpClient,private router: Router) { }

  ngOnInit() {
  }

  submitContact() {
    this.http.post('http://localhost:3000/contacts',this.newContact).toPromise()
    .then(data => {
      if (data) {
        this.router.navigate(['/contacts']);
      }
    }).catch(error => alert('添加联系人失败！！！'))
  }

}
