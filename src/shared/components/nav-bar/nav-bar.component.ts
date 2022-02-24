import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import {Component, ElementRef, HostListener, ViewChild} from "@angular/core";
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  animations: [
    trigger('openClose', [
      state('open', style({
        transform: 'translateX(0px)',
      })),
      state('closed', style({
        transform: 'translateX(-250px)',
      })),
      transition('open => closed', [
        animate('0.3s ease-in-out')
      ]),
      transition('closed => open', [
        animate('0.3s ease-in-out')
      ]),
    ]),
    trigger('fade', [
      state('in', style({
        opacity: 0.3,
      })),
      state('out', style({
        opacity: 0,
      })),
      transition('in => out', [
        animate('0.3s ease-in-out')
      ]),
      transition('out => in', [
        animate('0.3s ease-in-out')
      ]),
    ]),
  ],
})
export class NavBarComponent {
  public readonly faBars = faBars;
  public readonly faSearch = faSearch;

  public showSideBar = false;

  public toggleSideBar() {
    this.showSideBar = !this.showSideBar;
  }
}