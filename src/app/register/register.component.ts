import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  firstname: string ="";
  lastname: string ="";
  username: string ="";
  password: string ="";

  constructor(private http: HttpClient) 
  {
  }

  ngOnInit(): void
  {
  }

  register()
  {
    let bodyData = 
    {
      "firstname" : this.firstname,
      "lastname" : this.lastname,
      "username" : this.username,
      "password" : this.password,
    };
    this.http.post("http://localhost:9991/student/create",bodyData).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Student Registered Successfully")
    });
  }

  save()
  {
    this.register();
  }

}
