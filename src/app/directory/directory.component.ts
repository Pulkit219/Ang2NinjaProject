import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {
term:any;
 ninjas =[
   {name: "Yoshi", belt:"black"},
   {name: "ryu", belt:"red"},
   {name: "crystal", belt:"purple"}

];

  constructor() { 

  }

  ngOnInit() {
  }

}
