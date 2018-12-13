import { ChatServiceService } from './../../services/chat-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  message: string;
  element: any;

  constructor(public chatService: ChatServiceService) { 
    this.chatService.loadChats().subscribe( () => {
      setTimeout(() => {
        this.element.scrollTop = this.element.scrollHeight;
      },20);
    });
  }

  ngOnInit() {
    this.element = document.getElementById('app-messages');  
  }

  sendMessage() {
    if (this.message.length === 0) {
      return;  
    }
    this.chatService.addNewChat(this.message).then( ()=> { 
      console.log('Message was just sent');
      this.message = '';
    }).catch( error => console.error('Something went wrong', error));
  }
}
