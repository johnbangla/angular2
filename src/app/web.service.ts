
import { Injectable } from '@angular/core';
  import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
  import { Observable } from 'rxjs/Observable';
  import {Customer} from './customer';

  // Observable class extensions
  import 'rxjs/add/observable/of';
  import 'rxjs/add/observable/throw';

  // Observable operators
  import 'rxjs/add/operator/catch';
  import 'rxjs/add/operator/debounceTime';
  import 'rxjs/add/operator/distinctUntilChanged';
  import 'rxjs/add/operator/do';
  import 'rxjs/add/operator/filter';
  import 'rxjs/add/operator/map';
  import 'rxjs/add/operator/switchMap';

 // import { ToasterService } from './alert.service';  For friendly Toast Message
  //import { LoaderService } from './loader.service';  For Loding Something

  @Injectable()
  export class WebService {
      headers: Headers;
      options: RequestOptions;
      public foraddmyurl : string = "https://slimapp:443/api/customer/add"  ;
   //  public jsontesturl : string = "http://slimapp:443/ap"  ;
      constructor(private http: Http)
       {
          let headers = new Headers({ 'Content-Type': 'application\json' });
       let options = new RequestOptions({ headers: headers });
      }

      getService(url: string): Observable<any> {
          return this.http
              .get(url, this.options)
              .map(this.extractData)
              .catch(this.handleError);
      }

      getServiceWithDynamicQueryTerm(url: string, key: string, val: string): Observable<any> {
          return this.http
              .get(url + "/?" + key + "=" + val, this.options)
              .map(this.extractData)
              .catch(this.handleError);
      }
      
      getServiceWithMultipleQueryTerm(url: string, query: string): Observable<any> {
          return this.http
              .get(url + "/?" + query, this.options)
              .map(this.extractData)
              .catch(this.handleError);
      }

      getServiceWithFixedQueryString(url: string, param: any): Observable<any> {
          this.options = new RequestOptions({ headers: this.headers, search: 'query=' + param });
          return this.http
              .get(url, this.options)
              .map(this.extractData)
              .catch(this.handleError);
      }

      getServiceWithComplexObjectAsQueryString(url: string, param: any): Observable<any> {
          let params: URLSearchParams = new URLSearchParams();
          for (var key in param) {
              if (param.hasOwnProperty(key)) {
                  let val = param[key];
                  params.set(key, val);
              }
          }
          this.options = new RequestOptions({ headers: this.headers, search: params });
          return this.http
              .get(url, this.options)
              .map(this.extractData)
              .catch(this.handleError);
      }


      //Posting Data



postCarRestful():Observable<any>{
 
        let body = JSON.stringify(  {"firstname": "person"} );
        
 
        return this.http.post(this.foraddmyurl, body,this.options)
           // .map(res => res.json())
           .map(this.extractData)
            .catch(this.handleError);




}





//Testtes it works

createService(customerobj : Customer) {

var json = JSON.stringify({customerobj});
var params = 'json=' + json ;
var headers =  new Headers ; 
headers.append('Content-Type' , 'application/x-www-form-urlencoded; charset=UTF-8');
//x-www-form-urlencoded
var jsonurl = 'http://validate.jsontest.com' ;
var mylocalhosturl =  'https://slimapp:443/api/customer/add';

let body = JSON.stringify(customerobj);

return this.http.post(jsonurl, params, {headers : headers})
.map(result=>result.json());

}

      updateService(url: string, param: any): Observable<any> {
          let body = JSON.stringify(param);
          return this.http
              .put(url, body, this.options)
              .map(this.extractData)
              .catch(this.handleError);
      }

      patchService(url: string, param: any): Observable<any> {
          let body = JSON.stringify(param);
          return this.http
              .patch(url, body, this.options)
              .map(this.extractData)
              .catch(this.handleError);
      }

      deleteService(url: string, param: any): Observable<any> {
          let params: URLSearchParams = new URLSearchParams();
          for (var key in param) {
              if (param.hasOwnProperty(key)) {
                  let val = param[key];
                  params.set(key, val);
              }
          }
          this.options = new RequestOptions({ headers: this.headers, search: params });
          return this.http
              .delete(url, this.options)
              .map(this.extractData)
              .catch(this.handleError);
      }


     getServiceWithId(url: string): Observable<any> {
          return this.http
              .get(url , this.options)
              .map(this.extractData)
              .catch(this.handleError);
      }

      deleteServiceWithId(url: string, key: string, val: string): Observable<any> {
          return this.http
              .delete(url + "/?" + key + "=" + val, this.options)
              .map(this.extractData)
              .catch(this.handleError);
      }

      private extractData(res: Response) {
          let body = res.json();
          return body || {};
      }

      private handleError(error: any) {
          let errMsg = (error.message) ? error.message :
              error.status ? `${error.status} - ${error.statusText}` : 'Server error';
         // console.error(errMsg);
        //  this.toasterService.showToaster('error', 'Oops!! An error occurred', errMsg);
         // this.loaderService.displayLoader(false);
          return Observable.throw(errMsg);
      }
  }