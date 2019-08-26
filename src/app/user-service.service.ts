import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  userSubject = new Subject<object>();

  user$ = this.userSubject.asObservable();

  constructor() { }
  sendUser(user) {
    this.userSubject.next(user);
  }
}
