import { Component, OnInit, NgModule } from '@angular/core';
import { AppMessageServiceService } from '../app-messageService/app-messageService.service';
import { AppGreetingsServiceService } from '../app-greetingsService/app-greetingsService.service';
@Component({
  selector: 'app-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css'],
  providers: [
    AppMessageServiceService,
    AppGreetingsServiceService
  ]
})
export class AppHomeComponent implements OnInit {
  greeting = '';
  message = [];

  constructor(svc: AppMessageServiceService, greet: AppGreetingsServiceService) {
    this.message = svc.getMessages();
    this.greeting = greet.setGreetings();
  }

  salut(){
    this.greeting = "Salut!"
  }
  addItem(value: string){
    this.message.push(value);
  }
  removeItem(index){
    this.message.splice(index, 1);
  }

  ngOnInit() {
  }

}
