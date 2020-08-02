import { Injectable } from '@angular/core';
import urljoin from 'url-join';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Message } from '../interface/message';
import { Socket } from 'ngx-socket-io';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  url = urljoin(environment.apiUrl, 'messages');
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient, private socket: Socket) {}
  getMessage() {
    return this.socket.fromEvent('messages').pipe(map((data) => data));
  }
  saveMessage($message: Message) {
    return this.http.post(this.url, $message, { headers: this.headers });
  }
}
