import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppComponent } from './app.component';
import { PatientFormComponent } from './patient-form/patient-form.component';
import { ConfirmedPatientsComponent } from './confirmed-patients/confirmed-patients.component';
import { RegisteredUsersComponent } from './registered-users/registered-users.component';

import { RouterModule, Routes } from '@angular/router';


// var appRoutes:Routes[
  
// ];

@NgModule({
  declarations: [
    AppComponent,
    PatientFormComponent,
    ConfirmedPatientsComponent,
    RegisteredUsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path:'',component:PatientFormComponent},
      {path:'alha',component:RegisteredUsersComponent},
      {path:'op',component:ConfirmedPatientsComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
