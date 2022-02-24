import { MovieRoutingModule } from "./movie.routing";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { MovieComponent } from "./movie.component";

@NgModule({
  declarations: [MovieComponent],
  imports: [CommonModule, MovieRoutingModule],
})
export class MovieModule {}
