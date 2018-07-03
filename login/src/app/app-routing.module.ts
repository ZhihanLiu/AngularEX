import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {MyWeiboComponent} from './my-weibo/my-weibo.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'myWeibo', component: MyWeiboComponent  },
  {path:'login', component :LoginComponent}
];
 
@NgModule(
  {imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRoutingModule {



}
