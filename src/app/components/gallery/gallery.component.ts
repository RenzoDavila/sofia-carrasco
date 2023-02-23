import { Component, OnInit } from '@angular/core';
import { GalleryHome } from 'src/app/consts/GalleryHome.const';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {

  galleryHome:any = GalleryHome;

  ngOnInit(): void {
    console.log("galleryHome", this.galleryHome)
  }

  onPreviewImage(index: any): void{

  }

}
