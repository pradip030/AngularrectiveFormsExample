import { Component, OnInit } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, NgForm } from '@angular/forms';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
//Reactive Form
export class EmployeeComponent implements OnInit{

  registerForm:FormGroup;
  constructor(private formbuilder: FormBuilder) { }


  ngOnInit(){
    this.registerForm = this.formbuilder.group({
      fName: new FormControl(),
      lName:new FormControl(),
      pwd:new FormControl(),
      cnfpwd:new FormControl(),
    });
  }
 
  postData(registerForm:NgForm){
console.log(registerForm.controls);
} 
}

