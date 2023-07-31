import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  isLogin: boolean = true;
  erroMessage: string = "";

  constructor(private router: Router,private http: HttpClient) {}

  login() {
    console.log(this.username);
    console.log(this.password);

    let bodyData = {
      email: this.username,
      password: this.password,
    };

        this.http.post("http://localhost:9991/student/login", bodyData).subscribe(  (resultData: any) => {
        console.log(resultData);

        if (resultData.status) 
        {
      
           this.router.navigateByUrl('/home');
    

        } 
        else
         {
          alert("Incorrect Username or Password");
          console.log("Errror login");
        }
      });
    }

}
