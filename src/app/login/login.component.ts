import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { FormControlName, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { ILogin} from '../login';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private formBuilder:FormBuilder,private router:Router,public authService:AuthService) { }
  model: ILogin[] ;
  model1:ILogin[];
  loginForm:FormGroup;
message:string;
returnUrl:string;

  ngOnInit() { 
    this.loginForm = this.formBuilder.group({
      username:['', Validators.required],
      password:['', Validators.required]
    });
    this.returnUrl = '/home';
    this.authService.logout();
  }
  get f(){
    return this.loginForm.controls;
  }
 login(){
    if(this.loginForm.invalid){
     
      return;
    }
    else{
     this.authService.getLoginUsers(this.f.username.value,this.f.password.value).subscribe((data:ILogin[])=>{
        this.model =data;
       
      });
      if(this.model.length == 1){
        localStorage.setItem('isLoggedIn',"true");
        localStorage.setItem('token',this.f.username.value);
        localStorage.setItem('role',"user");
        localStorage.setItem('id',this.model[0]._id);
        this.router.navigate([this.returnUrl]);
      }
     
      this.authService.getProfessorLoginUsers(this.f.username.value,this.f.password.value).subscribe((data:ILogin[])=>{
        this.model1 =data;
       
      });
      if(this.model1.length == 1){
        localStorage.setItem('isLoggedIn',"true");
        localStorage.setItem('token',this.f.username.value);
        localStorage.setItem('role',"professor");
        localStorage.setItem('id',this.model1[0]._id);
        this.router.navigate(['/home']);
      }
      
 
    

    if(localStorage.getItem('isLoggedIn') == "false")
    if(this.f.username.value == 'admin' && this.f.password.value == 'admin123'){
      localStorage.setItem('isLoggedIn',"true");
      localStorage.setItem('token',"admin");
      localStorage.setItem('role',"admin");
      this.router.navigate(['/home']);
    }
    else{
      this.message = "Please check your username and password";
    }
    }
    }
   

  }
