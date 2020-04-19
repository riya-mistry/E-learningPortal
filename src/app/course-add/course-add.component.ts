import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {AdcourseService} from './../adcourse.service';
import { HttpClient } from '@angular/common/http';
import {  FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
@Component({
  selector: 'app-course-add',
  templateUrl: './course-add.component.html',
  styleUrls: ['./course-add.component.scss']
})
export class CourseAddComponent implements OnInit {
  title:string = "Course ";
  adCourse:FormGroup;
  username:String =  localStorage.getItem('token');
  constructor(private http:HttpClient,private adcourseservice:AdcourseService,private fb:FormBuilder,private router:Router) { 
    this.createForm();
  }
  //public uploader: FileUploader = new FileUploader({url: URL, itemAlias: 'photo'});

  createForm(){
    this.adCourse = this.fb.group({

      name:['',Validators.required],
      category: ['',Validators.required],
     cost:['',Validators.required],
     image:['',Validators.required],
       description:['', Validators.required]
       
    });
  }


addAdCourse(name,category,cost,description,image){

  
    this.adcourseservice.addAdCourse(name,category,cost,description,image);
    this.router.navigate(['/home']);

}
  ngOnInit() {
    if(localStorage.getItem('role') == "user"){
      this.router.navigate(['/home']);
    }
  }

}
