import { Component, OnInit } from '@angular/core';
import {MyserviceService} from '../myservice.service';       //services which i created


@Component({
  selector: 'app-fetchdata',
  templateUrl: './fetchdata.component.html',
  styleUrls: ['./fetchdata.component.css']
})
export class FetchdataComponent implements OnInit {

  
  name: any = [] ;    //declare a variable which will be used for looping like for loop above to get the data which will be embedded in html
constructor(private _eS : MyserviceService){}

ngOnInit() {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
 this._eS.somemethod() .subscribe(resName => this.name = resName );   //we need to subcribe to use the service.

}


}
