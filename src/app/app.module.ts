import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { DashboardComponent } from './Lawyers/dashboard/dashboard.component';
// import { LoginComponent } from './Lawyers/dashboard/login/login.component';
// import { RegistrationComponent } from './Lawyers/dashboard/registration/registration.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SidenavComponent } from './sidenav/sidenav.component';
// import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';
import { UsersModule } from './users/users.module';
import { TwoDashboardModule } from './two-dashboard/two-dashboard.module';
// import { CriminalLawyerComponent } from './Lawyers/criminal-lawyer/criminal-lawyer.component';
// import { BLOGComponent } from './Lawyers/blog/blog.component';

@NgModule({
  declarations: [
    AppComponent,
  
    
    // LoginComponent,
    // RegistrationComponent,
  
    
    
   

  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    TwoDashboardModule,
     //* material imports
     MatButtonModule,
     MatDialogModule,
     MatSidenavModule,
     MatToolbarModule,
     MatMenuModule,
     MatIconModule,
     MatDividerModule,
    MatListModule,
     UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
