import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { ApiService } from "./services/api.service";
import { PeopleTableComponent } from "./components/people-table/people-table.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [AppRoutingModule, BrowserModule, FormsModule],
  declarations: [AppComponent, PeopleTableComponent],
  bootstrap: [AppComponent],
  providers: [ApiService]
})
export class AppModule {}
