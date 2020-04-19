import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { AdcourseService } from '../adcourse.service';
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {
  id:string;
  role:string;
  userid:string;
  ishome:number;
  constructor(private router: Router,private authService: AuthService,private adcourseservice:AdcourseService) { }

  ngOnInit() {
    this.id = localStorage.getItem('token');
 this.role = localStorage.getItem('role');
 this.userid = localStorage.getItem('id');
 if(this.router.url == '/home'){
   this.ishome=1;
 }
  }

  logout(): void {
    console.log("Logout");
    this.authService.logout();
    this.router.navigate(['/login']);
  }
find(v){
this.router.navigate(['/details',v]);
}
}
