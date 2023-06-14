import {ComponentFixture, TestBed} from '@angular/core/testing';

import {GalleryImgComponent} from './gallery-img.component';

describe('GalleryImgComponent', () => {
  let component: GalleryImgComponent;
  let fixture: ComponentFixture<GalleryImgComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GalleryImgComponent]
    });
    fixture = TestBed.createComponent(GalleryImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
