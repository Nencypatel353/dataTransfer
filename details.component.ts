import { Component, OnInit } from '@angular/core';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  productName:any="";
  userAge:any="";
  userNumber:any="";
  userEmail:any="";
  userGender:any="";
  userDepartment:any="";
  userPincode:any="";
  userAddress:any="";
  constructor(private productname:MasterService,private userage:MasterService,private usernumber:MasterService,private useremail:MasterService,private usergender:MasterService,private userdepartment:MasterService,private userpincode:MasterService,private useraddress:MasterService){}
  
  ngOnInit(): void {
    this.productname.currentMessage.subscribe(message=>(
      this.productName = message
    ))
    
    this.userage.currentMessage2.subscribe((message2: any)=>(
      this.userAge = message2
    ))
    this.usernumber.currentMessage3.subscribe((message3:any)=>(
      this.userNumber = message3
    ))
    this.useremail.currentMessage4.subscribe((message4:any)=>(
      this.userEmail = message4
    ))
    this.usergender.currentMessage5.subscribe((message5: any)=>(
      this.userGender = message5
    ))
    this.userdepartment.currentMessage6.subscribe((message6: any)=>(
      this.userDepartment = message6
    ))
    this.userpincode.currentMessage7.subscribe((message7:any)=>(
      this.userPincode = message7
    ))
    this.useraddress.currentMessage8.subscribe((message8:any)=>(
      this.userAddress = message8
    ))
    
  }

  


}
