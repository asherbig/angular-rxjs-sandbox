import { Injectable } from "@angular/core";
import { of } from "rxjs";
import { delay } from "rxjs/operators";
import { peopleData } from "../data/data";

@Injectable()
export class ApiService {
  constructor() {}

  public getData() {
    return of(peopleData).pipe(delay(2000));
  }
}
