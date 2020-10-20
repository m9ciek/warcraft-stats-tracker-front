import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  private userDataUrl = 'http://localhost:8080/api/user-data';

  getUser(): Observable<User> {
    return this.http.get<User>(this.userDataUrl);
  }

}
