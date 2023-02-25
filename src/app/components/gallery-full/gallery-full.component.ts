import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-full',
  templateUrl: './gallery-full.component.html',
  styleUrls: ['./gallery-full.component.sass']
})
export class GalleryFullComponent implements OnInit {
  @Input() galleryData:any;
  showCount = true;
  previewImage = false;
  showMask = false;
  currentLightboxImage:any;
  currentIndex = 0;
  controls = true;
  totalImageCount = 0;

  ngOnInit(): void {
    this.currentLightboxImage = this.galleryData[0];
    this.totalImageCount = this.galleryData.length;
  }

  onPreviewImage(index: any): void{
    this.showMask = true;
    this.previewImage = true;
    this.currentIndex = index;
    this.currentLightboxImage = this.galleryData[index];
  }

  onClosePreview(){
    this.previewImage = false;
    this.showMask = false;
  }

  next(){
    this.currentIndex = this.currentIndex + 1;
    if(this.currentIndex > this.galleryData.length - 1){
      this.currentIndex = 0;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }

  prev(){
    this.currentIndex = this.currentIndex - 1;
    if(this.currentIndex < 0){
      this.currentIndex = this.galleryData.length - 1;
    }
    this.currentLightboxImage = this.galleryData[this.currentIndex];
  }

}
