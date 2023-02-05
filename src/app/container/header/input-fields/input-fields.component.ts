import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-input-fields',
  templateUrl: './input-fields.component.html',
  styleUrls: ['./input-fields.component.css']
})
export class InputFieldsComponent {
   val2="5";
   @Input() inputTo1:any;
   @Input() inputTo2:any;
   @Output() opToheader=new EventEmitter<string>();
   @Output() opToheader2=new EventEmitter<string>();
   fun(val:any){
    this.inputTo1=val.target.value;
    this.inputTo2=val.target.value;
   this.opToheader.emit(this.inputTo1);
   this.opToheader2.emit(this.inputTo2);
   }

}
