import { Component, OnInit } from '@angular/core';
import { AdcourseService } from '../adcourse.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import {AdCourse} from './AdCourse';
@Component({
  selector: 'app-course-display',
  templateUrl: './course-display.component.html',
  styleUrls: ['./course-display.component.scss']
})
export class CourseDisplayComponent implements OnInit {
adcourses:AdCourse[];
  constructor(private adcourseservice:AdcourseService,private router: Router,public authService: AuthService) { }

  ngOnInit() {
   /* this.adcourseservice.getAdCourses().subscribe((data:AdCourse[])=>{
      this.adcourses = data;
     
  });*/
  this.adcourseservice.getAdCourses().subscribe((data:AdCourse[])=>{
    this.adcourses = data;
   
  });
}

}
