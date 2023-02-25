import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GalleryFullComponent } from './gallery-full.component';

describe('GalleryFullComponent', () => {
  let component: GalleryFullComponent;
  let fixture: ComponentFixture<GalleryFullComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GalleryFullComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GalleryFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
