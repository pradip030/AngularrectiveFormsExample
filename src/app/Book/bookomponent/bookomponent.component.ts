import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';



@Component({
  selector: 'app-bookomponent',
  templateUrl: './bookomponent.component.html',
  styleUrls: ['./bookomponent.component.css']
})
export class BookomponentComponent  {

  // @Input() dataToChild:string;
  dataToChild:string = "TestToChild";
  dataToParent: string = "Child Message1";
  CtoPData: string;

  @Output() dataToParentEvent = new EventEmitter<string>();

  // constructor() { 

  //   console.log(`Child constructor : ${this.dataToChild}`);
  // }

  // ngOnInit() {
  //   console.log(`Child innitialized : ${this.dataToChild}`);
  // }

  SendToParent(){
    console.log('inside send to parent'+this.CtoPData);
this.dataToParentEvent.emit(this.CtoPData);
  }
}


