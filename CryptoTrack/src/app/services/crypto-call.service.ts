import { Injectable } from '@angular/core';
import { Constants } from '../constants';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CryptoCallService {

  constructor(private http: HttpClient) {}

  call(): Observable<any>{
    return this.http.get(Constants.API.coinmarket_url, { headers : Constants.httpHeader });
  }

}
