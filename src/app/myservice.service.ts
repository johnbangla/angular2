



import { Injectable }      from '@angular/core';
import {Http,Response} from '@angular/http';

import 'rxjs/add/operator/map';
@Injectable()

export class MyserviceService {
 
 
  private myurl : string = "https://api.github.com/users"  //using api form github.com just fetching data


constructor(private _se : Http){}


somemethod(){

return  this._se.get(this.myurl)   ///calling api 
.map((response : Response) => response.json());





}




}