import { Component, OnInit } from '@angular/core';
import {FileUploader, FileSelectDirective } from 'ng2-file-upload/ng2-file-upload';
import {SlimLoadingBarService} from 'ng2-slim-loading-bar';
import * as $ from 'jquery';
import { AngularFireDatabase} from 'angularfire2/database';
import *  as firebase from 'firebase/app';
import { NavigationCancel,
  Event,
  NavigationEnd,
  NavigationError,
  NavigationStart,
  Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




 export class AppComponent  implements OnInit{
  title = 'app';
  constructor(private _loadingBar: SlimLoadingBarService, private _router: Router) {
    this._router.events.subscribe((event: Event) => {
      this.navigationInterceptor(event);
    });
  }
  private navigationInterceptor(event: Event): void {
    if (event instanceof NavigationStart) {
      this._loadingBar.start();
    }
    if (event instanceof NavigationEnd) {
      this._loadingBar.complete();
    }
    if (event instanceof NavigationCancel) {
      this._loadingBar.stop();
    }
    if (event instanceof NavigationError) {
      this._loadingBar.stop();
    }
  }
  ngOnInit(){
    

  }
}