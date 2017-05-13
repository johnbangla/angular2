import {ModuleWithProviders} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import {AppComponent} from './app.component';
import {AboutComponent} from './about/about.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {FetchdataComponent} from './fetchdata/fetchdata.component';
import {NewcustomerComponent} from './newcustomer/newcustomer.component';

export const router: Routes = [

{path : '',redirectTo : 'home',pathMatch: 'full' },
{path : 'about',component :AboutComponent},
{path : 'login',component : LoginComponent},
{path : 'home',component : HomeComponent},
{path : 'fetchdata',component : FetchdataComponent},
{path : 'newcustomer',component : NewcustomerComponent}


];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
