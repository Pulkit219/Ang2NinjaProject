import { Component, OnInit } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  // moduleId: module.id,
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

//   parentValue:any;
//  ninja:any;
 

  constructor(private logger : LoggingService) {

 }
 logIt(){

  this.logger.log();
}

  ngOnInit() {
  }

}
