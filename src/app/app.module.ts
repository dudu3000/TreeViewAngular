import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { NgJsonEditorModule } from 'ang-jsoneditor' ;

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TreeComponent } from './tree/tree.component';

import { FetchJSONService } from './fetchJSON.service';
import { NewTreeComponent } from './newTree/newTree.component';


@NgModule({
  declarations: [						
    AppComponent,
    TreeComponent,
      NewTreeComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgJsonEditorModule
  ],
  providers: [
    FetchJSONService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }