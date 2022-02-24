import { NgModule } from "@angular/core";
import { LayoutComponent } from "./layout.component";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { NavBarModule } from "../nav-bar/nav-bar.module";

@NgModule({
  declarations: [LayoutComponent],
  exports: [
    LayoutComponent
  ],
  imports: [CommonModule, RouterModule, NavBarModule]
})
export class LayoutModule {}