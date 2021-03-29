import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {io} from 'socket.io-client'

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  private socket = io('http://localhost:3000');
  
 
  public sendMessage(message) {
    this.socket.emit('new-message', message);
}
getMessages(eventname: string) : Observable<any> {
  return new Observable((subscriber) => {
      this.socket.on(eventname, (data) => {
          subscriber.next(data);
      })
  })
}
ngInit(){
  
}
}
