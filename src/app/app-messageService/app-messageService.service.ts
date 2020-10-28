import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppMessageServiceService {

    getMessages(){
      return [
        'item0',
        'item1',
        'item2'
      ]
    }

}
