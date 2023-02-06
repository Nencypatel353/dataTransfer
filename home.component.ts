import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MasterService } from '../services/master.service';
import { AgeValidator } from '../age.validator';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent  {
  myForm='';
  constructor(private MasterService:MasterService,private router:Router ){}

  
    
  
  
  loginForm = new FormGroup({
    name:new FormControl('',[Validators.required]),
    age:new FormControl('',[Validators.required,AgeValidator]),
    number:new FormControl('',[Validators.required,Validators.pattern('[0-9 ]{12}')]),
    email:new FormControl('',[Validators.required,Validators.email,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
    gender:new FormControl('',[Validators.required]),
    department:new FormControl('',[Validators.required]),
    pincode:new FormControl('',[Validators.required,Validators.maxLength(6)]),
    address:new FormControl('',[Validators.required,Validators.maxLength(50)])

  })
  


  data:any;
  displayval:any='';
  addData(val:any){
    this.MasterService.changeMessage(this.loginForm.value.name);
    this.MasterService.changeMessage2(this.loginForm.value.age);
    this.MasterService.changeMessage3(this.loginForm.value.number);
    this.MasterService.changeMessage4(this.loginForm.value.email);
    this.MasterService.changeMessage5(this.loginForm.value.gender);
    this.MasterService.changeMessage6(this.loginForm.value.department);
    this.MasterService.changeMessage7(this.loginForm.value.pincode);
    this.MasterService.changeMessage8(this.loginForm.value.address);
    this.router.navigate(["/details"]);
    
    console.log(this.loginForm.value);
    this.displayval=val;
    
  }

  get name(){
    return this.loginForm.get('name')
  }
  get age(){
    return this.loginForm.get('age')
  }
  get number(){
    return this.loginForm.get('number')
  }
  get email(){
    return this.loginForm.get('email')
  }
  get gender(){
    return this.loginForm.get('gender')
  }
  get department(){
    return this.loginForm.get('department')
  }
  get pincode(){
    return this.loginForm.get('pincode')
  }
  get address(){
    return this.loginForm.get('address')
  }


  // ngOnInit(): void {
    
  // }

}
