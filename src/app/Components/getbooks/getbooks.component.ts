// import { getLocaleFirstDayOfWeek } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { UserService} from 'src/app/services/user.service';


@Component({
  selector: 'app-getbooks',
  templateUrl: './getbooks.component.html',
  styleUrls: ['./getbooks.component.scss']
})
export class GetbooksComponent implements OnInit {
  BookQuanity:number = 0;
  booksArray:any;
  cart: any;
  token: any;

  constructor(private bookService: UserService) { 
  
  }

  ngOnInit(): void {
    this.getAllBooks();

  }
  getAllBooks(){
    this.bookService.getBooks().subscribe((response:any)=>{
      console.log(response);
      this.booksArray=response['result'];
      console.log("returning data",this.booksArray);
    })
  }
}