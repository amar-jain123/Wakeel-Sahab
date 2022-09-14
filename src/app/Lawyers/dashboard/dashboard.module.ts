import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { RouterModule } from '@angular/router';
import { CriminalLawyerComponent } from '../criminal-lawyer/criminal-lawyer.component';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
// import { MainDashboardComponent } from './main-dashboard/main-dashboard.component';


@NgModule({
  declarations: [
    LoginComponent,
    RegistrationComponent,
    DashboardComponent,
    // MainDashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    RouterModule,
    FormsModule
  ],
  exports:[
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
  ]
})
export class DashboardModule { }
