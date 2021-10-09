import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService} from './http.service';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  url: any;
 

  constructor(private http: HttpService) { }

  signup = (data: any) => {

    console.log("Entered data is " ,data);
    return this.http.postService("/bookstore_user/registration", data)
  }
  
  login = (data: any) => {
    return this.http.postService("/bookstore_user/login", data)

  }

  // getService = (data: any) => {
  //   return this.http.getService("/bookstore_user/login", data)
  // }

  getBooks(): Observable<any> {
    // console.log(this.token);
    return this.http.getService('/bookstore_user/get/book', true, false);
  }
}

