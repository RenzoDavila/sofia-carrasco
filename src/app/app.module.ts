import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ContentComponent } from './components/content/content.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { MusicComponent } from './components/music/music.component';
import { ArtComponent } from './components/art/art.component';
import { ContactComponent } from './components/contact/contact.component';
import { GalleryFullComponent } from './components/gallery-full/gallery-full.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContentComponent,
    HeaderComponent,
    FooterComponent,
    GalleryComponent,
    MusicComponent,
    ArtComponent,
    ContactComponent,
    GalleryFullComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
