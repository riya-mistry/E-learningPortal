import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup,  FormBuilder,  Validators } from '@angular/forms';
import { AdUser } from './../profile/AdUser';
import { AduserService } from '../aduser.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent implements OnInit {
 
  aduser:any={};
  adUser : FormGroup;
  constructor(private route: ActivatedRoute,
    private router: Router,
    private aduserservice: AduserService,
    private fb: FormBuilder) {
      this.createForm();
     }
     createForm(){
      this.adUser = this.fb.group({
  
        name:['',Validators.required],
        username: ['',Validators.required],
        password:['',[Validators.required,Validators.minLength(6),Validators.maxLength(15)]],//Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])\w{6,}$')]],
        confirmpass:['',[Validators.required]],
        email:['',[Validators.required,Validators.email]],
        address:['',Validators.required],
        degree:['',Validators.required],
        school:['',Validators.required]
      });
    }
    updateAdUser(name, username,password,email,address,degree, school){
        this.route.params.subscribe(params=>{
          this.aduserservice.updateAdUser(name, username,password,email,address,degree, school,params['id']);
          this.router.navigate(['home']);
        })
    }
    ngOnInit() {
      this.route.params.subscribe(params => {
        this.aduserservice.editAdUser(params['id']).subscribe(res => {
          this.aduser = res;
      });
    });
  }
 

}
