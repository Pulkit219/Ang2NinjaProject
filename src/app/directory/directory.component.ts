import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  moduleId: module.id,
  selector: 'app-directory',
  templateUrl: './directory.component.html',
  styleUrls: ['./directory.component.css']
})
export class DirectoryComponent implements OnInit {

 classes = {'under': true, 'blue':true, 'red': false };

  constructor() { 

  }

  ngOnInit() {
  }

}
