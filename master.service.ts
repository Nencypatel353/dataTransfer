import { Injectable } from '@angular/core';
import {BehaviorSubject,Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  constructor() { }
  public editDataDetails:any = [];
  public editDataDetails2:any =[];
  public editDataDetails3:any =[];
  public editDataDetails4:any = [];
  public editDataDetails5:any =[];
  public editDataDetails6:any =[];
  public editDataDetails7:any = [];
  public editDataDetails8:any = [];
  
  public subject = new Subject<any>();
  private messageSource = new BehaviorSubject(this.editDataDetails);
  private messageSource2 = new BehaviorSubject(this.editDataDetails2);
  private messageSource3 = new BehaviorSubject(this.editDataDetails3);
  private messageSource4 = new BehaviorSubject(this.editDataDetails4);
  private messageSource5 = new BehaviorSubject(this.editDataDetails5);
  private messageSource6 = new BehaviorSubject(this.editDataDetails6);
  private messageSource7 = new BehaviorSubject(this.editDataDetails7);
  private messageSource8 = new BehaviorSubject(this.editDataDetails8);


  currentMessage = this.messageSource.asObservable();
  currentMessage2 = this.messageSource2.asObservable();
  currentMessage3 = this.messageSource3.asObservable();
  currentMessage4 = this.messageSource4.asObservable();
  currentMessage5 = this.messageSource5.asObservable();
  currentMessage6 = this.messageSource6.asObservable();
  currentMessage7 = this.messageSource7.asObservable();
  currentMessage8 = this.messageSource8.asObservable();

  changeMessage(message : any){
    this.messageSource.next(message)
  }
  changeMessage2(message2 : any){
    this.messageSource2.next(message2)

  }
  changeMessage3(message3: any){
    this.messageSource3.next(message3)
  }
  changeMessage4(message4 : any){
    this.messageSource4.next(message4)
    
  }
  changeMessage5(message5 : any){
    this.messageSource5.next(message5)
  }
  changeMessage6(message6 : any){
    this.messageSource6.next(message6)
  }
  changeMessage7(message7 : any){
    this.messageSource7.next(message7)
  }
  changeMessage8(message8 : any){
    this.messageSource8.next(message8)
  }

  
}
