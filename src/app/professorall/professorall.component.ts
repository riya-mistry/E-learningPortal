import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { AduserService } from '../aduser.service';
import { Router } from '@angular/router';
import { AdProfessorUser } from './AdProfessor';

@Component({
  selector: 'app-professorall',
  templateUrl: './professorall.component.html',
  styleUrls: ['./professorall.component.scss']
})
export class ProfessorallComponent implements OnInit {
adusers:AdProfessorUser[];
  constructor(private aduserservice:AduserService,private router: Router,public authService: AuthService) { }

  deleteAdUser(id) {
    this.aduserservice.deleteAdProfessorUser(id).subscribe(res => {
      console.log('Deleted');
    });
    this.router.navigate(['/professor-profile']);

  }
  ngOnInit() {
   
  this.aduserservice.getAdProfessorUsers().subscribe((data:AdProfessorUser[])=>{
    this.adusers = data;
   
  });

}
}
