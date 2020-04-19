import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormControl, FormGroup } from "@angular/forms";
import {  FormBuilder,  Validators } from '@angular/forms';
import { AduserService } from './../aduser.service';
@Component({
  selector: 'app-professorregister',
  templateUrl: './professorregister.component.html',
  styleUrls: ['./professorregister.component.scss']
})
export class ProfessorregisterComponent implements OnInit {
  title:String = "Professor";
  adProfessorUser:FormGroup;
  constructor(private aduserservice:AduserService,private fb:FormBuilder,private router:Router) { 
    this.createForm();
  }
  createForm(){
    this.adProfessorUser = this.fb.group({

      name:['',Validators.required],
      username:['',Validators.required],
      profession : ['',Validators.required],
      expertise:['',Validators.required],
      password:['',Validators.required],
      confirmpass:['',Validators.required],
      email:['',[Validators.required,Validators.email]],
      contact:['',[Validators.required]],//Validators.pattern('\d{10}')]],
      experience:['',[Validators.required]],//Validators.pattern('\d')]],
      account:['', [Validators.required]],//,Validators.pattern('^(?:3[47][0-9]{13})$')]],
      linkedin:['',[Validators.required]],//Validators.pattern('/^(http[s]?:\/\/){0,1}(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/')]]
    });
}
addAdProfessorUser(name,username,profession,expertise,email,
  contact, password,experience,account,linkedin){
    this.aduserservice.addAdProfessorUser(name,username,profession,expertise,email,
      contact, password,experience,account,linkedin);
  }

  ngOnInit() {
  }
  public submit():void{
    this.router.navigate(['/login']);
  }
  public check(password,confirmpass):void{
    if (password == confirmpass){
      this.adProfessorUser.valid;
    }
    else{
      this.adProfessorUser.invalid;
    }
  }


}
