import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { ContactComponent } from './contact/contact.component';
import { TreeComponent } from './tree/tree.component';

import { FetchJSONService } from './fetchJSON.service';


@NgModule({
  declarations: [					
    AppComponent,
    AppHomeComponent,
    ContactComponent,
    TreeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    FetchJSONService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }