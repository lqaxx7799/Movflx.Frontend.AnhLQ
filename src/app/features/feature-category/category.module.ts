import { CategoryRoutingModule } from "./category.routing";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CategoryComponent } from "./category.component";

@NgModule({
  declarations: [CategoryComponent],
  imports: [CommonModule, CategoryRoutingModule],
})
export class CategoryModule {}
