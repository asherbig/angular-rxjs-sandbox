import { Injectable } from "@angular/core";
import { from, of, timer } from "rxjs";
import { delay } from "rxjs/operators";
import { peopleData } from "../data/data";

@Injectable()
export class SandboxService {
  public secondTimer$ = timer(0, 1000); // emit immediately (0), then every second (1000)
  public oneValue$ = of("hello");
  public manyValues$ = from(["first", "second", "third"]);

  constructor() {}

  public getData() {
    return of(peopleData).pipe(delay(2000));
  }
}
