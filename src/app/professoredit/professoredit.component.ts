import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'
import { FormControl, FormGroup } from "@angular/forms";
import {  FormBuilder,  Validators } from '@angular/forms';
import { AduserService } from './../aduser.service';

@Component({
  selector: 'app-professoredit',
  templateUrl: './professoredit.component.html',
  styleUrls: ['./professoredit.component.scss']
})
export class ProfessoreditComponent implements OnInit {
  title:String = "Professor";
  professor:any={};
  adProfessorUser:FormGroup;
  id:string;
  constructor(private route: ActivatedRoute,private aduserservice:AduserService,private fb:FormBuilder,private router:Router) { }

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
  updateAdProfessorUser(name,username,profession,expertise,email,
    contact, password,experience,account,linkedin){
      this.route.params.subscribe(params=>{
        this.aduserservice.updateAdProfessorUser(name,username,profession,expertise,email,
          contact, password,experience,account,linkedin,params['id'])
       
      });
    }
  ngOnInit() {
    this.id = localStorage.getItem('id');
      this.aduserservice.editAdProfessorUser(this.id).subscribe(res => {
        this.professor = res;
    });

  }

}
