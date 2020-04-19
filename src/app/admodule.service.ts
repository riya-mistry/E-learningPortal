import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AdmoduleService {
  uri = 'http://localhost:4000/admodules';
  constructor(private http:HttpClient) { }

addAdModule(coursename,moduleno,modulename,description){

  const obj = {
    coursename:coursename,
    moduleno:moduleno,
    modulename:modulename,
    description:description
  };
 
  this.http.post(`${this.uri}/add`,obj).subscribe(res=>console.log('done added module'));

}
updateAdModule(coursename,moduleno,modulename,description){
  const obj = {
    coursename:coursename,
    moduleno:moduleno,
    modulename:modulename,
    description:description
  };
  this.http.post(`${this.uri}/update/S{id}`,obj).subscribe(res=>console.log(' updated module done'));
}
getAdModules() {
  return this
         .http
         .get(`${this.uri}`);
  }
	editAdModule(id){
		return this.http.get(`${this.uri}/edit/${id}`);
  }
  deleteAdModule(id){
    return this.http.get(`${this.uri}/delete/${id}`);
  }

  getFileModules(course){
    return this.http.get(`${this.uri}/mycourses/${course}`);
  }
}