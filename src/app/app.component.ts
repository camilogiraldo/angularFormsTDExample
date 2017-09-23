import { Component, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('formElement') signupForm: NgForm;
  defaultSuscription = 'advanced';
  user = {
    email: '',
    suscription: '',
    password: ''
  };
  submitted = false; 

  onSubmitForm(form: Form) {
    this.submitted = true;
    this.user.email = this.signupForm.value.email;
    this.user.suscription = this.signupForm.value.suscriptionType;
    this.user.password = this.signupForm.value.password;


    this.signupForm.reset();
  }
}
