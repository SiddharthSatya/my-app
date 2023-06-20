import { Component } from '@angular/core';
import { IvyCarouselModule } from 'angular-responsive-carousel';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {
  public slides = [
    { path: "./assets/img/offset_comp_559167 1.png" },
    { path: "./assets/img/offset_comp_559167 1.png" },
    { path: "./assets/img/offset_comp_559167 1.png" },
    { path: "./assets/img/offset_comp_559167 1.png" }
  ];
}
