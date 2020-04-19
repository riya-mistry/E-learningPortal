import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormControl, FormGroup } from "@angular/forms";
import {  FormBuilder,  Validators } from '@angular/forms';
import { AduserService } from './../aduser.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  title:string = "Register"
	name:string ="riya";
	adUser:FormGroup;
  constructor(private aduserservice:AduserService,private fb:FormBuilder,private router:Router) {
    this.createForm();
   }

   createForm(){
    this.adUser = this.fb.group({

      name:['',Validators.required],
      username: ['',Validators.required],
      password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]],//Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$')]],
      confirmpass:['',[Validators.required]],
      email:['',[Validators.required,Validators.email]],
      address:['',Validators.required],
      degree:['',Validators.required],
      school:['',Validators.required]
    });
}



addAdUser(name, username,password,email,address,degree, school){
this.aduserservice.addAdUser(name, username,password,email,address,degree, school);
}
  ngOnInit() {
  }

  public submit():void{
    this.router.navigate(['/login']);
  }
}
