import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  uri = 'http://localhost:4000/adusers';
  urip = 'http://localhost:4000/adprofessorusers';
  constructor(private http:HttpClient) { }

logout():void{
  localStorage.setItem('isLoggedIn','false');
  localStorage.removeItem('token');
  localStorage.removeItem('role');
  localStorage.removeItem('id');


}
getLoginUsers(username,password){
  return this
  .http
  .get(`${this.uri}/login/${username}/${password}`);
}
getProfessorLoginUsers(username,password){
  return this.http.get(`${this.urip}/login/${username}/${password}`);
}
}