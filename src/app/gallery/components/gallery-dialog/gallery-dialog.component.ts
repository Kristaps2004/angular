import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatCardModule, MatIconModule, MatMenuModule],
})
export class GalleryDialogComponent {
  public currentImg!: string;

  constructor(@Inject(MAT_DIALOG_DATA) public data: {
    img: string;
    gallery: { src: string; alt: string; thumbSrc: string }[]
  }) {
    this.currentImg = this.data.img
  }

  public prevImg(): void {
    const currentIndex = this.data.gallery.findIndex(
      (item) => {
        return item.src === this.currentImg
      }
    );
    const nextIndex = currentIndex === 0 ? (this.data.gallery.length - 1) : currentIndex - 1;

    this.currentImg = this.data.gallery[nextIndex].src
  }

  public nextImg(): void {
    const currentIndex = this.data.gallery.findIndex(
      (item) => {
        return item.src === this.currentImg
      }
    );
    const nextIndex = currentIndex === (this.data.gallery.length - 1) ? 0 : currentIndex + 1;

    this.currentImg = this.data.gallery[nextIndex].src
  }
}
