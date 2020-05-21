import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
// Material
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
// Mis módulos
import { DefaultModule } from "./layouts/default/default.module";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DefaultModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
