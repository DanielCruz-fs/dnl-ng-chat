import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/message.interface';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ChatServiceService {
  private itemsCollection: AngularFirestoreCollection<Message>;
  public chats: Message[] = [];
  constructor(private afs: AngularFirestore) { }

  loadChats() {
    this.itemsCollection = this.afs.collection<Message>('chats');  
    return this.itemsCollection.valueChanges().pipe( map(data => {
      console.log(data);
      this.chats = data;
    }) ); 
  }

  addNewChat(message: string) {
    let newMessage: Message = {
      name: 'James',
      message: message,
      date: new Date().getTime()
    }
    return this.itemsCollection.add(newMessage);
  }
}
