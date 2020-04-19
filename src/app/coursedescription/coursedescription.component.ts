import { Component, OnInit } from '@angular/core';
import { AdcourseService } from '../adcourse.service';
import { Router } from '@angular/router';
import {AdmoduleService} from './../admodule.service';
import { AdfileService } from '../adfile.service';
import {AdCourse} from './../course-display/AdCourse';
import { ActivatedRoute } from '@angular/router';
import { AduserService } from '../aduser.service';
@Component({
  selector: 'app-coursedescription',
  templateUrl: './coursedescription.component.html',
  styleUrls: ['./coursedescription.component.scss']
})
export class CoursedescriptionComponent implements OnInit {
  modules:any;
  files:any[];
  c:AdCourse;
  author:string;
  constructor(private aduserservice:AduserService,private activeRoute: ActivatedRoute,private adfileservice:AdfileService,private admoduleservice:AdmoduleService,private adcourseservice:AdcourseService,private router: Router) { }

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams
    const routeParams = this.activeRoute.snapshot.params
    this.adcourseservice.getCourseDetails(routeParams.name).subscribe((data:AdCourse)=>{
      this.c = data;
      if(this.c == null){
        this.author = "No Such course found";
        this.router.navigate['/home'];
      }
  
    
    });

    this.adfileservice.getFileByCourseName(routeParams.name).subscribe((data:any)=>{
        this.files = data;
        if(this.files == null) {
          this.router.navigate(['/home']);
        }
        
    });
  this.admoduleservice.getFileModules(routeParams.name).subscribe((data:any)=>{
    this.modules=data;
    if(this.modules == null){
      this.router.navigate(['/home']);
    }
  })

  
  }
  getAuthor(username){
    this.aduserservice.getAuthor(username).subscribe((data:any)=>{
      this.author = data;
  });
  }


}
