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
  conversation: any;
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
  ngOnInit(): void {}
  sendMessage() {
    this.chatService
      .saveMessage({ user: this.user, message: this.message })
      .subscribe((res: Message) => {
        this.conversation = res;
      });
    this.message = '';
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
