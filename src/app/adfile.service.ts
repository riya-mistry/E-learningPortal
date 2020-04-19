import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FileUploader } from 'ng2-file-upload';
@Injectable({
  providedIn: 'root'
})
export class AdfileService {
  uri = 'http://localhost:4000/adfiles';
  constructor(private http:HttpClient) { }

  addAdFile(coursename,modulename,fileno,filename,fileurl,description){

  	const obj = {
      coursename:coursename,
      modulename:modulename,
      fileno:fileno,
      filename:filename,
      fileurl:fileurl,
      description:description
  	
	  };
	 
  	this.http.post(`${this.uri}/add`,obj).subscribe(res=>console.log('done added user'));

  }
  updateAdFile(coursename,modulename,fileno,filename,fileurl,description){
    const obj = {
      coursename:coursename,
      modulename:modulename,
      fileno:fileno,
      filename:filename,
      fileurl:fileurl,
      description:description
  	
	  };
	  this.http.post(`${this.uri}/update/S{id}`,obj).subscribe(res=>console.log(' updated file done'));
  }
  getAdFiles() {
    return this
           .http
           .get(`${this.uri}`);
    }

    editAdFile(id){
      return this.http.get(`${this.uri}/edit/${id}`);
    }
    deleteAdFile(id){
      return this.http.get(`${this.uri}/delete/${id}`);
    }

  getFileByModuleName(modulename){
    return this.http.get(`${this.uri}/getfiles/${modulename}`);
  }
  getFileByCourseName(name){
    return this.http.get(`${this.uri}/view/${name}`);
  }
}
