import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent }      from './home/home.component';
import { ForecastComponent }      from './forecast/forecast.component';
const routes: Routes = [
  {path : '', component : HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'forecast', component: ForecastComponent }
];
@NgModule({
  imports: [ CommonModule,RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }