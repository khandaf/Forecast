import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class ForecastService {

  constructor(private http: HttpClient) { }
  getForecast(url:string) {
    return this.http.get(url);
  }
}
