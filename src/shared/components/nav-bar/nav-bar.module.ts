import { NgModule } from "@angular/core";
import { NavBarComponent } from "./nav-bar.component";
import { CommonModule } from "@angular/common";
import {RouterModule} from "@angular/router";
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

@NgModule({
  declarations: [NavBarComponent],
  exports: [
    NavBarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule,
    BrowserModule,
    BrowserAnimationsModule,
  ],
})
export class NavBarModule {}