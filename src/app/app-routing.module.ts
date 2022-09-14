import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BLOGComponent } from './Lawyers/blog/blog.component';
import { CriminalLawyerComponent } from './Lawyers/criminal-lawyer/criminal-lawyer.component';
import { DashboardComponent } from './Lawyers/dashboard/dashboard.component';
// import { LoginComponent } from './Lawyers/dashboard/login/login.component';
import { RegistrationComponent } from './Lawyers/dashboard/registration/registration.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginCompComponent } from './users/login-comp/login-comp.component';


const routes: Routes = [
  { path: '', redirectTo: 'login-comp', pathMatch: 'full' },
  { path: 'login-comp', component: LoginCompComponent },
  // {path: 'dashboard', component:DashboardComponent},
  {path: 'criminal-lawyer', component:CriminalLawyerComponent},
  {path: 'sidenav', component:SidenavComponent},
  {path: 'blog', component:BLOGComponent},
  {path:'Lawyers', loadChildren: ()=>import('../app/Lawyers/lawyers.module').then(x=>x.LawyersModule)},
  // "./Lawyers/Lawyers.module#LawyersModule"}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
