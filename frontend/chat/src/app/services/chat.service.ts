import { Injectable } from '@angular/core';
import urljoin from 'url-join';
import { environment } from 'src/environments/environment';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Message } from '../interface/message';
@Injectable({
  providedIn: 'root',
})
export class ChatService {
  url = urljoin(environment.apiUrl, 'messages');
  headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {}
  getMessage(){
    return this.http.get(this.url);
  }
  saveMessage($data: Message) {
    return this.http.post(this.url, $data, { headers: this.headers });
  }
}
