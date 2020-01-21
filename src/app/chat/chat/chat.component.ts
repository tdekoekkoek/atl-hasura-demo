import { Component, OnInit } from '@angular/core';
import {ChatService} from '../../service/chat.service';
import {Message} from '../../service/chat.model';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  messages: Array<Message>;

  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.fetchMessages().subscribe((data: Array<Message>) => {
      this.messages = data;
      this.messages.forEach(m => {
        m.text += '--yeah baby!';
      })
    });
  }

}
