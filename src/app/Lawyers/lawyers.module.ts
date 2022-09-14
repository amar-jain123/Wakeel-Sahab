import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LawyersRoutingModule } from './lawyers-routing.module';
import { BLOGComponent } from './blog/blog.component';
import { CriminalLawyerComponent } from './criminal-lawyer/criminal-lawyer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { AboutComponent } from './about/about.component';


@NgModule({
  declarations: [
    BLOGComponent,
    CriminalLawyerComponent,
    AboutComponent,
  
  ],
  imports: [
    CommonModule,
    LawyersRoutingModule
  ],
  exports:[
    BLOGComponent,
    CriminalLawyerComponent
  ]
})
export class LawyersModule { }
