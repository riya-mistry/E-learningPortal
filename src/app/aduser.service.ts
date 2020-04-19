import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AduserService {
	uri = 'http://localhost:4000/adusers';
	urip = 'http://localhost:4000/adprofessorusers';
  constructor(private http:HttpClient) { }

  addAdUser(name, username,password,email,address,degree, school){

  	const obj = {
  		name:name,
  		username:username,
  		password:password,
  		email:email,
  		address:address,
  		degree:degree,
  		school:school
	  };
	 
  	this.http.post(`${this.uri}/add`,obj).subscribe(res=>console.log('done added user'));

  }
  addAdProfessorUser(name,username,profession,expertise,email,
	contact, password,experience,account,linkedin){
	  const obj={
		name:name,
		username:username,
		profession:profession,
		expertise : expertise,
		email: email,
 		contact:contact,
		password: password,
		experience: experience,
		account:account,
		linkedin : linkedin
	  }
	  this.http.post(`${this.urip}/add`,obj).subscribe(res=>console.log('professor added succesfully'));
  }

  updateAdProfessorUser(name,username,profession,expertise,email,
	contact, password,experience,account,linkedin,id){
	  const obj={
		name:name,
		profession:profession,
		expertise : expertise,
		email: email,
 		contact:contact,
		password: password,
		experience: experience,
		account:account,
		linkedin : linkedin
	  }
	  this.http.post(`${this.urip}/update/${id}`,obj).subscribe(res=>console.log('done'));
  }


  deleteAdProfessorUser(id){
	return this.http.get(`${this.urip}/delete/${id}`);
}



updateAdUser(name, username,password,email,address,degree, school,id){
	const obj = {
		name:name,
		username:username,
		password:password,
		email:email,
		address:address,
		degree:degree,
		school:school
	};
	this.http.post(`${this.uri}/update/${id}`,obj).subscribe(res=>console.log('done'));
}
deleteAdUser(id){
	return this.http.get(`${this.uri}/delete/${id}`);
}

getAdUsers() {
    return this
           .http
           .get(`${this.uri}`);
    }
	getAdProfessorUsers() {
		return this
			   .http
			   .get(`${this.urip}`);
		}
	
	editAdUser(id){
		return this.http.get(`${this.uri}/edit/${id}`);
	}
editAdProfessorUser(id){
	return this.http.get(`${this.urip}/edit/${id}`);
}
getDisplayAdUser(username){
	return this.http.get(`${this.uri}/display/${username}`);
}

getAuthor(username){
	return this.http.get(`${this.urip}/byusername/${username}`);
}
}
