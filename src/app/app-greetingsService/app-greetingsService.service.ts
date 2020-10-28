import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppGreetingsServiceService {

  setGreetings(){
    return 'Salut!';
  }

}
