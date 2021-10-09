import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  
  
  baseUrl = environment.baseUrl;
  // getService: any;
  
  constructor(private httpClient: HttpClient) { }

  postService( url: string = '',payload: any = null, tokenRequired: boolean = false, httpOptions:any=null) {
    /* handles post operations
      params : id  : id of question or comment to add/post,
      apiendpoint : endpoint i.e 'comments/' , 'answers/', 'editquestions/'
  */
    return this.httpClient.post(this.baseUrl+url, payload, tokenRequired && httpOptions);
  }

  getService( url: string = '', tokenRequired: boolean = false, httpOptions:any=null) {
    /* handles post operations
      params : id  : id of question or comment to add/post,
      apiendpoint : endpoint i.e 'comments/' , 'answers/', 'editquestions/'
  */
    return this.httpClient.get(this.baseUrl+url , tokenRequired && httpOptions);
  }
  
}
