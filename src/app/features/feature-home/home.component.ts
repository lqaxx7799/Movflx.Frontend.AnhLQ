import {Component} from "@angular/core";
import {HomeMovieItem} from "../../../cores/core-home/types";
import {MovieStatusEnum} from "../../../cores/core-home/enums";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
})
export class HomeComponent {
  public readonly MovieStatusEnum = MovieStatusEnum
  public readonly SportItems: HomeMovieItem[] = [
    {
      title: 'U23 Việt Nam - U23 Timor Leste',
      channelName: 'AFC 2',
      estimatedAirTime: 'Đang diễn ra',
      status: MovieStatusEnum.Airing,
      thumbnailUrl: '/assets/viet-nam-vs-timor-update24-02-2022_15g06-40.webp',
      url: '/',
    },
    {
      title: 'U23 Việt Nam - U23 Timor Leste',
      channelName: 'AFC 2',
      estimatedAirTime: 'Còn khoảng 2h',
      status: MovieStatusEnum.Scheduled,
      thumbnailUrl: '/assets/viet-nam-vs-timor-update24-02-2022_15g06-40.webp',
      url: '/',
    },
    {
      title: 'U23 Việt Nam - U23 Timor Leste',
      channelName: 'AFC 2',
      estimatedAirTime: 'Còn khoảng 2h',
      status: MovieStatusEnum.Scheduled,
      thumbnailUrl: '/assets/viet-nam-vs-timor-update24-02-2022_15g06-40.webp',
      url: '/',
    },
    {
      title: 'U23 Việt Nam - U23 Timor Leste',
      channelName: 'AFC 2',
      estimatedAirTime: 'Còn khoảng 2h',
      status: MovieStatusEnum.Scheduled,
      thumbnailUrl: '/assets/viet-nam-vs-timor-update24-02-2022_15g06-40.webp',
      url: '/',
    },
    {
      title: 'U23 Việt Nam - U23 Timor Leste',
      channelName: 'AFC 2',
      estimatedAirTime: 'Còn khoảng 2h',
      status: MovieStatusEnum.Scheduled,
      thumbnailUrl: '/assets/viet-nam-vs-timor-update24-02-2022_15g06-40.webp',
      url: '/',
    },
    {
      title: 'U23 Việt Nam - U23 Timor Leste',
      channelName: 'AFC 2',
      estimatedAirTime: 'Còn khoảng 2h',
      status: MovieStatusEnum.Scheduled,
      thumbnailUrl: '/assets/viet-nam-vs-timor-update24-02-2022_15g06-40.webp',
      url: '/',
    },
    {
      title: 'U23 Việt Nam - U23 Timor Leste',
      channelName: 'AFC 2',
      estimatedAirTime: 'Còn khoảng 2h',
      status: MovieStatusEnum.Scheduled,
      thumbnailUrl: '/assets/viet-nam-vs-timor-update24-02-2022_15g06-40.webp',
      url: '/',
    },
    {
      title: 'U23 Việt Nam - U23 Timor Leste',
      channelName: 'AFC 2',
      estimatedAirTime: 'Còn khoảng 2h',
      status: MovieStatusEnum.Scheduled,
      thumbnailUrl: '/assets/viet-nam-vs-timor-update24-02-2022_15g06-40.webp',
      url: '/',
    },
  ];

  public readonly CinemaItems: HomeMovieItem[] = [
    {
      title: 'Biệt đội săn ma',
      thumbnailUrl: '/assets/untitled-121-02-2022_15g06-48.webp',
      url: '/',
    },
    {
      title: 'Căn phòng tử thần: Cái chết trở lại',
      thumbnailUrl: '/assets/untitled-121-02-2022_15g06-48.webp',
      url: '/',
    },
    {
      title: 'Biệt đội săn ma',
      thumbnailUrl: '/assets/untitled-121-02-2022_15g06-48.webp',
      url: '/',
    },
    {
      title: 'Biệt đội săn ma',
      thumbnailUrl: '/assets/untitled-121-02-2022_15g06-48.webp',
      url: '/',
    },
    {
      title: 'Biệt đội săn ma',
      thumbnailUrl: '/assets/untitled-121-02-2022_15g06-48.webp',
      url: '/',
    },
    {
      title: 'Biệt đội săn ma',
      thumbnailUrl: '/assets/untitled-121-02-2022_15g06-48.webp',
      url: '/',
    },
    {
      title: 'Biệt đội săn ma',
      thumbnailUrl: '/assets/untitled-121-02-2022_15g06-48.webp',
      url: '/',
    },
    {
      title: 'Biệt đội săn ma',
      thumbnailUrl: '/assets/untitled-121-02-2022_15g06-48.webp',
      url: '/',
    },
    {
      title: 'Biệt đội săn ma',
      thumbnailUrl: '/assets/untitled-121-02-2022_15g06-48.webp',
      url: '/',
    },
  ];
}
