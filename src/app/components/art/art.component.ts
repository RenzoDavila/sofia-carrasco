import { Component } from '@angular/core';
import { GalleryArt1, GalleryArt2, GalleryArt3, GalleryArt4 } from 'src/app/consts/GalleryArt.const';

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.sass']
})
export class ArtComponent {
  galleryArt1:any = GalleryArt1;
  galleryArt2:any = GalleryArt2;
  galleryArt3:any = GalleryArt3;
  galleryArt4:any = GalleryArt4;
}
