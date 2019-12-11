import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { BookomponentComponent } from './Book/bookomponent/bookomponent.component';
import { GlobalConstants } from '../app/global-constants';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[  ]
})
export class AppComponent {
  title = 'MyFirstAngularExample';
  data:number = 10;
  msg:string = "Message From Parent" ;
  msgFromChild:string;
  msgFromEmitter:string;

 // @ViewChild(BookomponentComponent,  {static: false}) bookchildComponentObj;


  
  ngOnInit(){
    console.log(` Inside ngOnInit  -  ${this.data}`+this.data);
  }

  constructor(public global_constants: GlobalConstants){
    console.log(`Inside constructor -  ${this.data}`);
    console.log(`Insidee constructor global var is - ${global_constants.greetMsg_global}`)
  }
  
  ngOnChanges(){
    console.log(` Inside ngOnChanges  -  ${this.data}`);
  }

  ngDoCheck(){
    console.log(` Inside ngDoCheck  -  ${this.data}`);
  }
  
  ngAfterContentInit(){
    console.log(` Inside ngAfterContentInit  -  ${this.data}`);
  }

  
  ngAfterContentChecked(){
    console.log(` Inside ngAfterContentChecked  -  ${this.data}`);
  }

  
  ngAfterViewInit(){
    console.log(` Inside ngAfterViewInit  -  ${this.data}`);
    //console.log(` bookchildComponentObj dataToParent  -  ${this.bookchildComponentObj.dataToParent}`);
    
    //this.msgFromChild = this.bookchildComponentObj.dataToParent;
  }

  ngAfterViewChecked(){
    console.log(` Inside ngAfterViewChecked  -  ${this.data}`);
  }
  
  ngDestroy(){
    console.log(` Inside ngDestroy  -  ${this.data}`);
  }

  btnClicked1(){
    console.log('button clicked 1');
    this.data += 10;
  }
  btnClicked2(){
    this.data -= 10;
    console.log('button clicked 2');
  }

  receiveMessage($event){
    this.msgFromEmitter = $event;
  }
}
