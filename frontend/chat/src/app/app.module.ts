import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from 'src/environments/environment';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';
const config: SocketIoConfig = { url: environment.apiUrl, options: {} };
 
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
