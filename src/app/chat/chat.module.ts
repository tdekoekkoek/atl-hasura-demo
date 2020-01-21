import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat/chat.component';
import {RouterModule} from '@angular/router';

const CHAT_ROUTES = [
  {
    path: '',
    component: ChatComponent
  }
]

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(CHAT_ROUTES)
  ]
})
export class ChatModule { }
