import { Component, OnInit } from '@angular/core';
import {AdmoduleService} from './../admodule.service';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Course} from './Course';
import { AdcourseService } from '../adcourse.service';

@Component({
  selector: 'app-module-add',
  templateUrl: './module-add.component.html',
  styleUrls: ['./module-add.component.scss']
})
export class ModuleAddComponent implements OnInit {
  title:string = "Module ";

allcourses:Course[];
  adModule:FormGroup;
  username:string = localStorage.getItem('token'); 
  constructor(private adcourseservice:AdcourseService,private http:HttpClient,private admoduleservice:AdmoduleService,private fb:FormBuilder,private router:Router) {
    this.createForm();
   }
   createForm(){
    this.adModule = this.fb.group({

      coursename:['',Validators.required],
      moduleno:['',Validators.required],
      modulename:['',Validators.required],
       description:['', Validators.required]
       
    });
  }



  addModule(coursename,moduleno,modulename,description){
    this.admoduleservice.addAdModule(coursename,moduleno,modulename,description);
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    if(localStorage.getItem('role') == "user"){
      this.router.navigate(['/home']);
    }
    this.adcourseservice.getMyCourses().subscribe((data:Course[])=>{
      this.allcourses = data;
     
    });
   
    
  }

}
