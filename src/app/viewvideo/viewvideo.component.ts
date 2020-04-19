import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import { AdmoduleService } from '../admodule.service';
import { AdfileService } from '../adfile.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-viewvideo',
  templateUrl: './viewvideo.component.html',
  styleUrls: ['./viewvideo.component.scss']
})
export class ViewvideoComponent implements OnInit {
modules:string[];
files:any;
  constructor(private activeRoute: ActivatedRoute,private admoduleservice:AdmoduleService,
    private adfileservice:AdfileService,private route:Router) { }

  openNav() {
    document.getElementById("mySidenav").style.display = "block";
  
    $("span#menu").addClass("col-sm-2");
      if ($(".video").hasClass("col-sm-9")){
          $(".video").addClass("col-sm-7").removeClass("col-sm-9");
          
      }
      else if($(".video").hasClass("col-sm-11")){
           $(".video").addClass("col-sm-9").removeClass("col-sm-11");
      }
   
  }
   closeNav() {
    document.getElementById("mySidenav").style.display = "none";
     if ($(".video").hasClass("col-sm-7") || $(".video").hasClass("col-sm-6")){
          $(".video").addClass("col-sm-9").removeClass("col-sm-7");
          
      }
      else if($(".video").hasClass("col-sm-9")){
           $(".video").addClass("col-sm-11").removeClass("col-sm-9");
      }
     
    $("span#menu").removeClass("col-sm-2");
  }

   closeNotes(){
    document.getElementById("mySidenav2").style.display = "none";
   if ($(".video").hasClass("col-sm-7") || $(".video").hasClass("col-sm-6")){
       $(".video").addClass("col-sm-9").removeClass("col-sm-7");
       
   }
   else if($(".video").hasClass("col-sm-9")){
        $(".video").addClass("col-sm-11").removeClass("col-sm-9");
   }
  // $("span#notes").removeClass("col-sm-2");
}

 openNotes(){
  document.getElementById("mySidenav2").style.display = "block";
  if ($(".video").hasClass("col-sm-9")){
     $(".video").removeClass("col-sm-9").addClass("col-sm-7");
     
 }
 else if($(".video").hasClass("col-sm-11")){
      $(".video").addClass("col-sm-9").removeClass("col-sm-11");
 }
// $("span#notes").addClass("col-sm-2");
}

getvideos(modulename){
  this.adfileservice.getFileByModuleName(modulename).subscribe((data:any[])=>{
this.files=data;
  });
  return this.files;
}
changeDes(description){
  $(".description").text(description);
}
changeVideo(fileurl){
  $("iframe").attr("src",fileurl);
  
}

  ngOnInit() {
    const queryParams = this.activeRoute.snapshot.queryParams
    const routeParams = this.activeRoute.snapshot.params
    this.admoduleservice.getFileModules(routeParams.id).subscribe((data:any)=>{
      this.modules = data;
    });
    this.adfileservice.getFileByCourseName(routeParams.id).subscribe((data:any[])=>{
      this.files=data;
        });
        $("iframe").attr("src",this.files[0].fileurl);
  }

}
