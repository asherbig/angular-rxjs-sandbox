import { Component } from '@angular/core';
import { combineLatest, concat, zip } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { ApiService } from './services/api.service';
import { SandboxService } from './services/sandbox.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public timerA$ = this.sandbox.timerA$;
  public timerB$ = this.sandbox.timerB$;

  public combineLatest$ = combineLatest([this.timerA$, this.timerB$]).pipe(
    map(([timerA, timerB]) => timerA + timerB)
  );

  // note slightly different syntax than combineLatest, not an array
  public zip$ = zip(this.timerA$, this.timerB$).pipe(
    map(([timerA, timerB]) => timerA + timerB)
  );

  public concat$ = concat(this.sandbox.manyValues$, this.sandbox.oneValue$)
    .pipe(tap(value => console.log('concat output:', value)))
    .subscribe();

  constructor(public api: ApiService, public sandbox: SandboxService) {}

  public onGetDataPress() {
    this.api.getData().subscribe(data => {
      console.log('some data:', data);
    });
  }

  public getPeoplePressed() {
    this.getPeople().subscribe(data => {
      console.log('star wars person:', data);
    });
  }

  public getFilms() {
    this.getPeople().pipe();
  }

  private getPeople() {
    return this.api.get('https://swapi.py4e.com/api/people/1/');
  }
}
