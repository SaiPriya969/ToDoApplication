import { Component,Input } from '@angular/core';
import {ServiceService} from 'src/app/container/service.service'
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  val1:any="";
  val2:any="";
  c1:any;
  c2:any;
  arr:object[]=[];
  str:string[]=[];
 name(event:any){
    this.c1= event;
 }
 description(event:any){
  this.c2=event
 }
 constructor(private ser:ServiceService){

 }
//  ngOnInit(){
//   this.fun2();
//  }
 fun2(){
  this.val1=this.c1;
  this.val2=this.c2;
  this.str=[this.val1,this.val2];
  this.arr.push(this.str);
  this.ser.Msg(this.arr);
 }

 
}
