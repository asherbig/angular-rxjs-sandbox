import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { peopleData } from '../data/data';

@Injectable()
export class ApiService {
  constructor(private http: HttpClient) {}

  public getPeopleData() {
    return of(peopleData).pipe(delay(2000));
  }

  public getData() {
    return this.get('https://jsonplaceholder.typicode.com/todos/1');
  }

  public get(url: string) {
    return this.http.get(url);
  }
}
