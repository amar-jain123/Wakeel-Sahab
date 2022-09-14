import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl,Validators } from '@angular/forms';
import { RegistrationComponent } from '../registration/registration.component';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CriminalLawyerComponent } from '../../criminal-lawyer/criminal-lawyer.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // myForm: FormGroup;
  // isLoggedIn = false;

  // OpenDesktop() {
  //   this.isLoggedIn = true;
  // }


  constructor(public matDialog: MatDialog, private router: Router) { 
  }

  OpenDesktop() {
    this.router.navigate(['/', 'dashboard']);

  }

  
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
    dialogRegConfig.id = "registration-component";
   //  dialogConfig.height = "350px";
   //  dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(RegistrationComponent, dialogRegConfig);
  }


  
  openCriminalModal(){
    const dialogCriminalConfig = new MatDialogConfig();
    // The user can't close the dialog by clicking outside its body
    dialogCriminalConfig.disableClose = false;
    dialogCriminalConfig.id = "criminal-lawyer-component";
   //  dialogConfig.height = "350px";
   //  dialogConfig.width = "600px";
    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(CriminalLawyerComponent, dialogCriminalConfig);
  }

  // login_value:string = "";

  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   login_value: new FormControl(''),
    //   username: new FormControl(''),
    //   password: new FormControl('')
    // });
    // console.log(this.myForm.get('login_value'))
  }

  onSubmit(form: FormGroup) {
    console.log('Valid?', form.valid); // true or false
    console.log('Name', form.value.login_value);
    // console.log(form.value.login_value);
    console.log('Email', form.value.username);
    console.log('Message', form.value.password);
    if(form.value.login_value == 'Lawyer'){
      this.openCriminalModal();
      
      console.log("this is lawyer mode ")
    }
    else
    {
      console.log("this is client mode ")
     }
  }
  

 

  // Login()
  // {
  //   if(this.login_value == 'Client'){
  //     console.log("this is lawyer mode ")
  //   }
  //   else{
  //     console.log("this is client mode ")
  //   }
  // }

}
