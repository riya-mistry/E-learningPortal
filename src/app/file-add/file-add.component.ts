import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdfileService } from './../adfile.service';
import { Course } from '../module-add/Course';
import { AdcourseService } from '../adcourse.service';
import { AdmoduleService } from '../admodule.service';
@Component({
  selector: 'app-file-add',
  templateUrl: './file-add.component.html',
  styleUrls: ['./file-add.component.scss']
})
export class FileAddComponent implements OnInit {
  title:string = "Videos ";
  adFile:FormGroup;
  message:String;
  allcourses:Course[];
  allmodules:string[];
  constructor(private admoduleservice:AdmoduleService,private adcourseservice:AdcourseService,private http:HttpClient,private adfileservice:AdfileService,private fb:FormBuilder,private router:Router) { 
    this.createForm();

  }
  createForm(){
    this.adFile = this.fb.group({

      coursename:['',Validators.required],
      modulename:['',Validators.required],
      fileno:['',Validators.required],
      filename:['',Validators.required],
      fileurl:['',Validators.required],
       description:['', Validators.required]
       
    });
  }
  addAdFile(coursename,modulename,fileno,filename,fileurl,description){
    this.adfileservice.addAdFile(coursename,modulename,fileno,filename,fileurl,description);
    this.router.navigate(['/home']);
  }
  selectModules(coursename){
    this.admoduleservice.getFileModules(coursename).subscribe((data:string[])=>{
      this.allmodules = data;
    })
    
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
