import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { UsersRoutingModule } from './users-routing.module';
import { LoginCompComponent } from './login-comp/login-comp.component';
// import { TwoDashboardModule } from '../two-dashboard/two-dashboard.module';


@NgModule({
  declarations: [
    LoginCompComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    ReactiveFormsModule,
    // TwoDashboardModule
    // FormsModule

  ]
})
export class UsersModule { }
