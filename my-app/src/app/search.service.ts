import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { catchError, switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private baseUrl = 'http://localhost:8080';
  // private baseUrl = 'https://lahack-kidstalkwithai-384518.uw.r.appspot.com';

  constructor(private httpClient: HttpClient) { }

  giveResponse(query: any): Observable<any> {
    console.log("service query:", query)
    const route = "ask-one";

    return this.httpClient.get<any>(`${this.baseUrl}/${route}?input=${query}`)
      .pipe(
        tap(_ => console.log(`service giveResponse`)),
        catchError(
          this.handleError<any>('giveResponse', "")
        )
      );
    // return this.httpClient.get<any>(`${this.baseUrl}`, { headers: { input: query } })
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      //TODO : send the error to remote logging infrastructure
      console.error(error); //log to console instead

      //TODO: better job of transforming error for user consuption
      console.log(`${operation} failed: ${error.message}`);

      //let the app kep running by returning an empty result.
      return of(result as T);
    }
  }
}
