import { Component, OnInit } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  constructor(public matDialog:MatDialog, ) { }

  openModal(){
    const dialogConfig = new MatDialogConfig();
     // The user can't close the dialog by clicking outside its body
     dialogConfig.disableClose = false;
     dialogConfig.id = "login-component";
    //  dialogConfig.height = "350px";
    //  dialogConfig.width = "600px";
     // https://material.angular.io/components/dialog/overview
     const modalDialog = this.matDialog.open(LoginComponent, dialogConfig);
  }
  openRegModal(){
    const dialogRegConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogRegConfig.disableClose = false;
    dialogRegConfig.id = "login-component";
   //  dialogConfig.height = "350px";
   //  dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(RegistrationComponent, dialogRegConfig);
  }
  ngOnInit(): void {
  }

}
