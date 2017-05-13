import { Injectable } from '@angular/core';
import {Http,Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Customer} from './customer';
import {Observable}   from'rxjs/Rx';
@Injectable()
export class SlimserviceService {

 
private myurl : string = "https://slimapp/api/customers"  //using api form github.com just fetching data
private foraddmyurl : string = "https://slimapp/api/customer/add"  //using api form github.com just fetching data


constructor(private _se : Http){}


somemethod(){

return  this._se.get(this.myurl)   ///calling api 
.map((response : Response) => response.json());





}

/*

//For post method

//***********
createService(url: string, param: any): Observable<any> {
  let body = JSON.stringify(param);
  return this._se
      .post(url, body, this.options)
      .map(this.extractData)
      .catch(this.handleError);
  }

 //************** 





create(name: string): Observable<Customer> {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._se.post(this.foraddmyurl, { name }, options)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

private extractData(res: Response) {
  let body = res.json();
  return body.data || { };
}

private handleError (error: Response | any) {
  // In a real world app, you might use a remote logging infrastructure
  let errMsg: string;
  if (error instanceof Response) {
    const body = error.json() || '';
    const err = body.error || JSON.stringify(body);
    errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  } else {
    errMsg = error.message ? error.message : error.toString();
  }
  console.error(errMsg);
  return Observable.throw(errMsg);
}


*/


}
