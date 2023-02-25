import { Component } from '@angular/core';
import { GalleryHome } from 'src/app/consts/GalleryHome.const';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {
  galleryHome:any = GalleryHome;
}
