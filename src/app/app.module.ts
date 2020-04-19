import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SlimLoadingBarModule } from 'ng2-slim-loading-bar';
import { HttpClientModule } from '@angular/common/http';
import { AduserService } from './aduser.service'
import {AuthGuard} from './auth.guard';
import { ReactiveFormsModule} from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfessorregisterComponent } from './professorregister/professorregister.component';
import { RegisterComponent } from './register/register.component';
import { EditComponent } from './edit/edit.component';
import {FileSelectDirective} from 'ng2-file-upload';
import { CourseAddComponent } from './course-add/course-add.component';
import { CourseDisplayComponent } from './course-display/course-display.component';
import { CourseEditComponent } from './course-edit/course-edit.component';
import { ModuleAddComponent } from './module-add/module-add.component';
import { FileAddComponent } from './file-add/file-add.component';
import { ModuleDisplayComponent } from './module-display/module-display.component';
import { FileDisplayComponent } from './file-display/file-display.component';
import { ViewvideoComponent } from './viewvideo/viewvideo.component';
import { CoursedescriptionComponent } from './coursedescription/coursedescription.component';
import { ProfessoreditComponent } from './professoredit/professoredit.component';
import { ProfessorallComponent } from './professorall/professorall.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavigationComponent,
    HomeComponent,
   FileSelectDirective,
    ProfileComponent,
    ProfessorregisterComponent,
    RegisterComponent,
    EditComponent,
   
    CourseAddComponent,
    CourseDisplayComponent,
    CourseEditComponent,
    ModuleAddComponent,
    FileAddComponent,
    ModuleDisplayComponent,
    FileDisplayComponent,
    ViewvideoComponent,
    CoursedescriptionComponent,
    ProfessoreditComponent,
    ProfessorallComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    SlimLoadingBarModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [AduserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
