import { Component } from '@angular/core';
import { ChatService } from './chat.service';
import {io} from 'socket.io-client';

const SOCKET_ENDPOINT = 'localhost:3000';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  newMessage: any;
  socket:any;
  messageList: any [] = [];
  user:any;

  constructor(private chatService: ChatService) { }


  sendMessage() {
    const data = { "message": this.newMessage, "name": this.user }
    this.chatService.sendMessage(data);
    this.newMessage = '';
  }
  ngOnInit() {
    this.chatService.getMessages('new-message').subscribe((data) => this.updateMessage(data));
  }
  updateMessage(data:any) {
    if(!!!data) return;
    console.log(data);
    this.messageList.push(data);
  }
}