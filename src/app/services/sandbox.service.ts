import { Injectable } from '@angular/core';
import { from, of, timer } from 'rxjs';
import { delay, shareReplay } from 'rxjs/operators';
import { peopleData } from '../data/data';

@Injectable({ providedIn: 'root' })
export class SandboxService {
  public secondTimer$ = timer(0, 1000); // emit immediately (0), then every second (1000)
  public oneValue$ = of('hello');
  public manyValues$ = from(['first', 'second', 'third']);

  public timerA$ = timer(0, 3000);
  public timerB$ = timer(1500, 3000);

  constructor() {}

  public getData() {
    return of(peopleData).pipe(delay(2000));
  }
}
