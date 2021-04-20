import { Component } from "@angular/core";
import { ApiService } from "./services/api.service";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  constructor(public api: ApiService) {}
}
