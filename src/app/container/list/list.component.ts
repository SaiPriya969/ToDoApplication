import { Component, OnInit} from '@angular/core';
import {ServiceService} from 'src/app/container/service.service'
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
 
    constructor(private ser:ServiceService){

    }
    arr:object[]=[];
    ngOnInit(){
      this.ser.sendMsg.subscribe(msg=>this.arr=msg)
    }
    del(idx:any)
    {
       this.arr.splice(idx,1);
    }
}
