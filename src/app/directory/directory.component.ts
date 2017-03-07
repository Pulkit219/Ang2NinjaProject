import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';
import{DataService} from '../data.service';
declare var firebase: any;
// import 'rxjs/Rx';
// import { Injectable } from '@angular/core';
// import { HttpModule, RequestOptions,Http } from '@angular/http';




@Component({
  
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css'],
  
})
export class DirectoryComponent implements OnInit {
  
 term:any;

 ninjas =[];

  constructor(private logger : LoggingService, private dataService : DataService) {

 }
 logIt(){

  this.logger.log();
}

  fbGetData(){

    firebase.database().ref('/').on('child_added', (snapshot)=> {
     this.ninjas.push(snapshot.val())
    })
  }

  postData(name, belt){
firebase.database().ref('/').push({name :name, belt:belt})

  }

  ngOnInit() {

    // this.dataService.fetchData().subscribe(

    //   (data) => this.ninjas = data
    // );

    this.fbGetData();
   
  }



}
