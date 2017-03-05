import 'rxjs/Rx';
import { Injectable } from '@angular/core';
import { HttpModule, RequestOptions,Http } from '@angular/http';



@Injectable()
export class DataService {

  constructor(private http: Http) { }

  fetchData(){
   return this.http.get('./app/ninjas.json').map(
    (res) => res.json()
   );
  }

}
