import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {MyserviceService} from './myservice.service'; 
import {SlimserviceService} from './slimservice.service';
import {routes} from './app.router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FetchdataComponent } from './fetchdata/fetchdata.component';
import { NewcustomerComponent } from './newcustomer/newcustomer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LoginComponent,
    FetchdataComponent,
    NewcustomerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    BrowserAnimationsModule,
    routes
  ],
  providers: [MyserviceService,SlimserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
