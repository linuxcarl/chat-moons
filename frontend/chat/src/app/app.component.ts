import { Component } from '@angular/core';
import { ChatService } from './services/chat.service';
import { Message } from './interface/message';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'Chat Moons';
  userActive: boolean = false;
  isValid: boolean;
  user: string = '';
  message: string;
  conversation: string[] = [];
  button: false;
  regexUser = new RegExp('^[a-zA-Z ]{3,20}$');
  constructor(private chatService: ChatService) {
    if (
      this.regexUser.test(sessionStorage.getItem('user')) &&
      sessionStorage.getItem('user')
    ) {
      this.userActive = true;
      this.user = sessionStorage.getItem('user');
    }
  }
  ngOnInit(): void {
    this.getMessage();
  }
  sendMessage() {
    if (this.message!=='') {
      this.chatService
        .saveMessage({ user: this.user, message: this.message })
        .subscribe();
      this.message = '';
    }
  }
  getMessage(){
    this.chatService.getMessage().subscribe((message: any) =>{
      this.conversation.push(message);
    });
  }
  addUser() {
    if (this.regexUser.test(this.user)) {
      this.userActive = true;
      sessionStorage.setItem('user', this.user);
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }
}
