import { MovieStatusEnum } from "../enums";

export interface HomeMovieItem {
  thumbnailUrl: string;
  title: string;
  channelName?: string;
  estimatedAirTime?: string;
  url: string;
  status?: MovieStatusEnum;
}