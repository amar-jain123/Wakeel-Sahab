import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BLOGComponent } from './blog/blog.component';
import { CriminalLawyerComponent } from './criminal-lawyer/criminal-lawyer.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AboutComponent } from './about/about.component';
import { RegistrationComponent } from './dashboard/registration/registration.component';

const routes: Routes = [
  {
    path:'blog',component:BLOGComponent
  },
  {
    path:'criminal-lawyer',component:CriminalLawyerComponent
  },
  {
    path:'about',component:AboutComponent
  },
  {
    path:'dashboard',component:DashboardModule
  },
  {
    path:'registration',component:RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LawyersRoutingModule { }
