import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  logIn!:FormGroup
  constructor() { }

  ngOnInit(): void {
    this.logIn= new FormGroup({
      'fName':new FormControl('',[Validators.required, Validators.minLength(3)]),
      'lName':new FormControl('',[Validators.required, Validators.minLength(3)]),
      'email': new FormControl('',[Validators.required, Validators.minLength(3)]),
      'password':new FormControl('',[Validators.required, Validators.minLength(6)])
    })
  }

  onSubmit(){
    console.log(this.logIn);
  }

  
  get fname() {
    return this.logIn.controls['fName'];
  } 


  get lname(){
    return this.logIn.controls['lName']
  }

  get email(){
    return this.logIn.controls['email']
  }
  get password(){
    return this.logIn.controls['password']
  }
}
