import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdcourseService {
  uri = 'http://localhost:4000/adcourses';
  constructor(private http:HttpClient) { }


addAdCourse(name,category,cost,description,image){

  const obj = {
    name:name,
    category:category,
    cost:cost,
    description:description,
    image:image,
    author:localStorage.getItem('token')
    
  };
 
  this.http.post(`${this.uri}/add`,obj).subscribe(res=>console.log('done added user'));

}
getAdCourses() {
  return this
         .http
         .get(`${this.uri}`);
  }
getCourseDetails(name){
  return this.http.get(`${this.uri}/view/${name}`);
}
getMyCourses(){
  let x = localStorage.getItem('token');

  return this.http.get(`${this.uri}/mycourses/${x}`);
}
}