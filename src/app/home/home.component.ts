import { Component, OnInit } from '@angular/core';
import { SlimserviceService} from '../slimservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

 customers : any = [];

  constructor( private _slimService : SlimserviceService) { }

  ngOnInit() {

this._slimService.somemethod().subscribe(resCustomer => this.customers = resCustomer );

  }

}
