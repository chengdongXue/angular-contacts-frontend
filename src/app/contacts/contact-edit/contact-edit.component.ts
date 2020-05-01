import { Component, OnInit, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-edit',
  templateUrl: './contact-edit.component.html',
  styleUrls: ['./contact-edit.component.css']
})
export class ContactEditComponent implements OnInit, OnDestroy {

  public sub: any;
  public newContact = {
    email:'',
    phone:'',
    name:'',
    id:0
  }
  constructor(private http: HttpClient,private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    // 一种方式
    // let contactId = this.route.snapshot.params.id;
    //第二种方式
    this.sub = this.route.queryParams.subscribe((parameter):any => {
      this.getContactListById(parameter.id);
    });
  }

  getContactListById(contactId: number = 1 | 0) {
    this.http.get(`http://localhost:3000/contacts/${contactId}`).toPromise()
    .then((data): any => {
      if (data) {
        let contact = {};
        contact['email'] = data['email'];
        contact['name'] = data['name'];
        contact['phone'] = data['phone'];
        contact['id'] = data['id'];
        // Object.assign() 方法用于将所有可枚举属性的值从一个或多个源对象复制到目标对象。
        // 它将返回目标对象。
        Object.assign(this.newContact,contact);
      }
    }).catch(error => alert('查询联系人信息失败！！！'))
  }

  submitContact() {
    this.http.patch(`http://localhost:3000/contacts/${this.newContact.id}`,this.newContact).toPromise()
    .then(data => {
      if (data) {
        this.router.navigate(['/contacts']);
      }
    }).catch(error => alert('编辑联系人失败！！！'))
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
