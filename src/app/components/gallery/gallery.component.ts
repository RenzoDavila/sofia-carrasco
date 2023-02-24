import { animate, style, transition, trigger, state } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { GalleryHome } from 'src/app/consts/GalleryHome.const';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass']
})
export class GalleryComponent implements OnInit {
  galleryHome:any = GalleryHome;
  showCount = true;
  previewImage = false;
  showMask = false;
  currentLightboxImage:any = this.galleryHome[0];
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  ngOnInit(): void {
    console.log("galleryHome", this.galleryHome)
    this.totalImageCount = this.galleryHome.length;
  }

  onPreviewImage(index: any): void{
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryHome[index];
  }

  onClosePreview(){
    this.previewImage = false;
    this.showMask = false;
  }

  next(){
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex > this.galleryHome.length - 1){
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.galleryHome[this.currentIndex];
  }

  prev(){
    this.currentIndex = this.currentIndex - 1;
    if(this.currentIndex < 0){
      this.currentIndex = this.galleryHome.length - 1;
    }
    this.currentLightboxImage = this.galleryHome[this.currentIndex];
  }

}
