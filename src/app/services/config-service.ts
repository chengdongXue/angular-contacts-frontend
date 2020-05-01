import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, retry} from 'rxjs/operators';
import { menu } from '../menu-entity';
import { HandleError } from '../error/handleError'
import { Observable, of, from } from 'rxjs';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient){}

  private menuUrl: string = '../assets/mock/menu.json';

  public getLinks():Observable<menu> {
    // now returns an Observable of menu
    return this.http.get<menu>(this.menuUrl).pipe(retry(3));
  }
}