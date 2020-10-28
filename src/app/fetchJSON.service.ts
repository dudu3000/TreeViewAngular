import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class FetchJSONService {
  private data;
  private configUrl = 'restjson';
  private error;
  constructor(private http: HttpClient){}
  fetchJSON() : Promise<string>{
    return this.http.get('http://localhost:5846/' + this.configUrl, {responseType: 'text'}).toPromise().then(res=>this.data = JSON.parse(res));
  }

}