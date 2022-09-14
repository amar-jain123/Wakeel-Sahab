import { Component } from '@angular/core';
import { SidenavComponent } from './sidenav/sidenav.component';
import { LoginComponent } from './Lawyers/dashboard/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Advocate';
  // isLoggedIn = false;
  
  sideBarOpen = false;
  sidebarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }
}
