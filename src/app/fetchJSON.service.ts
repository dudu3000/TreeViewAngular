import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
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
    return this.http.get(
      'http://localhost:5846/' + this.configUrl, {responseType: 'text'}
    ).pipe(
      retry(3), 
      catchError(this.handleError)
    ).toPromise().then(
        res=>this.data = JSON.parse(res)
    );
  }

  private handleError(error: HttpErrorResponse){
    if( error.error instanceof ErrorEvent){
      console.error('An error occurred: ' , error.error.message);
    }else{
      console.error('Backend returned code ${error.status}, ' + 'body was: ${error.error}');
    }

    return throwError(
      'Something bad happend; please try again later'
    );
  }

}