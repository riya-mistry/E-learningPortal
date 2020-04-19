import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {ProfileComponent} from './profile/profile.component';
import  {RegisterComponent} from './register/register.component';
import { ProfessorregisterComponent} from './professorregister/professorregister.component';
import { EditComponent } from './edit/edit.component';
import {AuthGuard} from './auth.guard';
import {CourseAddComponent} from './course-add/course-add.component';
import { CourseDisplayComponent } from './course-display/course-display.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { AuthService } from './auth.service';
import { ModuleAddComponent } from './module-add/module-add.component';
import { FileAddComponent } from './file-add/file-add.component';
import { ModuleDisplayComponent } from './module-display/module-display.component';
import { FileDisplayComponent } from './file-display/file-display.component';
import { ViewvideoComponent } from './viewvideo/viewvideo.component';
import { CoursedescriptionComponent } from './coursedescription/coursedescription.component';
import { ProfessoreditComponent } from './professoredit/professoredit.component';
import { ProfessorallComponent } from './professorall/professorall.component';
const routes: Routes = [
	{path:'', redirectTo:'home', pathMatch:'full'},
	{path:'login', component:LoginComponent},
	{path:'home', component:HomeComponent},
	{ path :'profile' , component:ProfileComponent},
	{path : 'register', component:RegisterComponent},
	{path:'professor-register', component:ProfessorregisterComponent},
	{path:'edit/:id', component:EditComponent, canActivate:[AuthGuard]},
	{path:'course/new',component:CourseAddComponent, canActivate:[AuthGuard]},
	{path:'course/display', component:CourseDisplayComponent},
	{path:'course/edit/:id', component:CourseEditComponent,canActivate:[AuthGuard]},
	{path:'module/add', component:ModuleAddComponent,canActivate:[AuthGuard]},
	{path:'video/add', component:FileAddComponent},
	{path:'course/:id', component:ViewvideoComponent,canActivate:[AuthGuard]},
	{path:'details/:name',component:CoursedescriptionComponent},
	{path:'professoredit/:id',component:ProfessoreditComponent,canActivate:[AuthGuard]},
	{path:'professor-profile',component:ProfessorallComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
