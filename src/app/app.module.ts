import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ViewAllComponent } from './view-all/view-all.component';

const myRoute:Routes=[{path:"",component:AddEmployeeComponent},
                      {path:"add",component:AddEmployeeComponent},
                      {path:"view",component:ViewAllComponent},]

@NgModule({
  declarations: [
    AppComponent,
    AddEmployeeComponent,
    NavBarComponent,
    ViewAllComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    RouterModule.forRoot(myRoute),
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
