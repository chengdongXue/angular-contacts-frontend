import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ContactInfo } from './contactInfo';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Array<ContactInfo> = [];
  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
    this.initData();
  }

  gotoEditPage(event: any, contact: ContactInfo) {
    event.preventdefault;
    // Passing optional parameters to a router
    this.router.navigate(['/contacts/edit'], { queryParams: {id: contact.id}});
  }

  initData() {
    this.http.get('http://localhost:3000/contacts').toPromise()
    .then((data: any) => {
      this.contacts = data;
    }).catch( error => alert('获取数据失败！！！'));
  }

  removeItem(event,contactId) {
    event.preventdefault;
    if (window.confirm(`确定删除吗？`)) {
      if (contactId) {
        this.http.delete(`http://localhost:3000/contacts/${contactId}`).toPromise()
        .then((data) => {
          this.contacts = new Array<ContactInfo>();
          this.initData();
        }).catch(error => {alert(`删除失败`)})
      }
    }
  }
  
}
