import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {GalleryImg} from "../../interfaces/gallery-img.interface";
import {AsyncPipe} from "@angular/common";
import {Observable} from "rxjs";
import {ThemeService} from "../../../shared/services/theme.service";
import {GalleryDialogData} from "../../interfaces/gallery-dialog-data.interface";
import {MAT_RIPPLE_GLOBAL_OPTIONS} from "@angular/material/core";


@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatCardModule, MatIconModule, MatMenuModule, AsyncPipe],
})
export class GalleryDialogComponent {
  public currentImg!: GalleryImg;
  public isDarkTheme$: Observable<boolean>;

  constructor(
    public themeService: ThemeService,
    @Inject(MAT_DIALOG_DATA) public data: GalleryDialogData) {
    this.isDarkTheme$ = this.themeService.isDarkTheme$
    this.currentImg = this.data.item;
  }

  public prevImg(): void {
    const currentIndex = this.data.gallery.findIndex(
      (item) => {
        return item.src === this.currentImg.src;
      }
    );
    const nextIndex = currentIndex === 0 ? (this.data.gallery.length - 1) : currentIndex - 1;

    this.currentImg = this.data.gallery[nextIndex];
  }

  public nextImg(): void {
    const currentIndex = this.data.gallery.findIndex(
      (item) => {
        return item.src === this.currentImg.src;
      }
    );
    const nextIndex = currentIndex === (this.data.gallery.length - 1) ? 0 : currentIndex + 1;

    this.currentImg = this.data.gallery[nextIndex];
  }
}
