import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../classes/user';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }

  public login(user: User): Observable<number> {
    return of(Math.random() * (1000 - 0));
  }
}
