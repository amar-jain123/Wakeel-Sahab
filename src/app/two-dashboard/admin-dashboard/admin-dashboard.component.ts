import { Component, OnInit } from '@angular/core';
import { SidenavComponent } from 'src/app/sidenav/sidenav.component';
import { HeaderComponent } from 'src/app/header/header.component';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss']
})
export class AdminDashboardComponent implements OnInit {

  constructor() { }
  sideBarOpen = false;
  sidebarToggler(){
    this.sideBarOpen=!this.sideBarOpen;
  }

  ngOnInit(): void {
  }

}
