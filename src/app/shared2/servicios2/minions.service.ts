import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class MinionsService {
  [x: string]: any;
  constructor(private httpClient: HttpClient) { }
  public recuperarMinions(): Observable<any> {
    return this.httpClient.get<any>('https://my-json-server.typicode.com/MariaGonca/jsonAPI/minions');
    }
}
