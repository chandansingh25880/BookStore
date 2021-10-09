import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserService} from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;

  constructor(public Service: UserService) { }
  form = new FormGroup({
  
    userName: new FormControl('', [Validators.required, Validators.email, Validators.minLength(3)]),
    password: new FormControl('', [Validators.required, Validators.minLength(3)]),
 
  })

  submit() {
    console.log(this.form.valid); 
      if (this.form.valid) {
        let data = {
       
          "email": this.form.controls.userName.value,
          "password": this.form.controls.password.value,
        
        }
     
        this.Service.login(data).subscribe((response: any) =>{
          console.log(" login successfully " ,data);
          // localStorage.setItem('Token', response['id']);
          localStorage.setItem('Token',response.result.accessToken);
        });
        (error:any) => {

          console.log(error);
        }

    }
  }

  ngOnInit(): void {
  }

}
