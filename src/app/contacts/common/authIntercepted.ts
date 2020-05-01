import { Injectable } from '@angular/core';
import {
  HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';
import { Observable } from 'rxjs';

/** Pass untouched request through to the next request handler. */
@Injectable()
export class NoopInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler):Observable<HttpEvent<any>> {
      // 登录和注册二个界面是不需要进行token认证的
      // 所以在拦截器里面需要把这个http 请求给过滤掉
      // 采用httprequest请求中提供的方法来做判断
      const signin: boolean = (req.method === 'POST' && req.url.indexOf('session') != -1);
      const signup: boolean = (req.method === 'POST' && req.url.indexOf('users') != -1);
      if (signin || signup) {
        return next.handle(req);
      }
    // Clone the request and replace the original headers with
    // cloned headers, updated with the authorization.
    const authReq = req.clone({
        headers: req.headers.set('X-Access-Token', window.localStorage.getItem('auth_token'))
    });
    return next.handle(authReq);
  }
}