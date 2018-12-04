import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule,ReactiveFormsModule} from '@angular/forms'
import { AppComponent } from './app.component';
import { DbApiService} from './db-api.service'
import { HttpModule } from '@angular/http'
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule
  ],
  providers: [DbApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
