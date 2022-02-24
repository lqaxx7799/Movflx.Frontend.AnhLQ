import { EpisodeRoutingModule } from "./episode.routing";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EpisodeComponent } from "./episode.component";

@NgModule({
  declarations: [EpisodeComponent],
  imports: [CommonModule, EpisodeRoutingModule],
})
export class EpisodeModule {}
