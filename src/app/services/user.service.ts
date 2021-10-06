import { Injectable } from '@angular/core';
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
 
}

