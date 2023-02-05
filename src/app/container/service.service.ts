import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  sendMsg=new Subject<any>();

  constructor() { }
  Msg(msg:any)
  {
    this.sendMsg.next(msg);
  }
}
