import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Abbott Page';
  public slides = [
    { imageSrc: "./assets/img/My Abbott Cares Logo v030323-White.jpg",imageAlt:"slide1" },
    { imageSrc: "./assets/img/pexels-craig-adderley-1563355.jpg",imageAlt:"slide2" },
    { imageSrc: "./assets/img/My Abbott Cares Logo v030323-White.jpg",imageAlt:"slide3" },
    { imageSrc: "./assets/img/pexels-craig-adderley-1563355.jpg",imageAlt:"slide4" }
  ];
}
