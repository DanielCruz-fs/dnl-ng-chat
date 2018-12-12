import { ChatServiceService } from './../../services/chat-service.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent {

  message: string;

  constructor(private chatService: ChatServiceService) { 
    this.chatService.loadChats().subscribe();
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
