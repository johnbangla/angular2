import { Component, OnInit ,Input} from '@angular/core';
import {WebService} from '../web.service';
import {Customer} from '../customer';



@Component({
  selector: 'app-newcustomer',
  templateUrl: './newcustomer.component.html',
  styleUrls: ['./newcustomer.component.css'],
  providers:[WebService]
})




export class NewcustomerComponent implements OnInit   {
 constructor(private _sS : WebService) {}


@Input() customerobj : Customer;

 ngOnInit(){

this.customerobj = new Customer();

this.customerobj.firstname = "john";
this.customerobj.lastname = "dalton";
this.customerobj.email = "johnbangla@gmail.com";
this.customerobj.address = "347/3,west deobog,Nagbari.Narayangonj";
this.customerobj.city = "Narayangonj";
this.customerobj.state = "DHaka";
this.customerobj.phone = "01553080223";



 }





postMyCarToServer:string;
 errorMessage : string;
  
 


postDataToServer(){
this._sS.createService(this.customerobj).subscribe(//call the post
                data => this.postMyCarToServer = JSON.stringify(data), // put the data returned from the server in our variable
                  error => alert(error), // in case of failure show this message
                () => console.log("Job Done Post !")//run this code in all cases
            );
    }


// error => console.log("Error HTTP Post Service"),
   






customers : any = [];
customersbyid : any = [];


//get all customers
getCustomer (){




this._sS.getService("https://slimapp/api/customers")
            .subscribe(
               resCustomer => this.customers = resCustomer
            
            );

}

//get customer by id

getCustomerByid (){




this._sS.getServiceWithId("https://slimapp/api/customers/{5}")
            .subscribe(
               resCustomerbyid => this.customersbyid = resCustomerbyid
            
            );

}









}
