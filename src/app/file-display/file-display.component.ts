import { Component, OnInit, Input } from '@angular/core';
import { AdcourseService } from '../adcourse.service';
import { Router } from '@angular/router';
import {AdmoduleService} from './../admodule.service';
import { AdfileService } from '../adfile.service';
import {AdCourse} from './../course-display/AdCourse';
import { ActivatedRoute } from '@angular/router';
import { AduserService } from '../aduser.service';
@Component({
  selector: 'app-file-display',
  templateUrl: './file-display.component.html',
  styleUrls: ['./file-display.component.scss']
})
export class FileDisplayComponent implements OnInit {
@Input() name:string;
files:any;
  constructor(private activeRoute: ActivatedRoute,private adfileservice:AdfileService,private admoduleservice:AdmoduleService,private adcourseservice:AdcourseService,private router: Router) { }

  ngOnInit() {
    this.adfileservice.getFileByModuleName(this.name).subscribe((data:any)=>{
      this.files = data;
    })
  }

}
