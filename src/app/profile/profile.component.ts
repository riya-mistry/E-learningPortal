import { Component, OnInit } from '@angular/core';
import {AduserService } from './../aduser.service';
import { AdUser } from './AdUser';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {AdCourse} from './../course-display/AdCourse';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
adusers:AdCourse[];
id:string;
role:String;
name:string;
no:number=1;
  constructor(private aduserservice:AduserService,private router: Router,public authService: AuthService) { }

  deleteAdUser(id) {
    this.aduserservice.deleteAdUser(id).subscribe(res => {
      console.log('Deleted');
    });
  }

  ngOnInit() {
    this.aduserservice.getAdUsers().subscribe((data:AdCourse[])=>{
      this.adusers = data;
     
    });
    this.id = localStorage.getItem('token');
    this.role = localStorage.getItem('role');
    this.name= localStorage.getItem('id');
  }
  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }

}
