import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {GalleryDialogComponent} from "../gallery-dialog/gallery-dialog.component";
import {GalleryImg} from "../../interfaces/gallery-img.interface";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],

})
export class GalleryComponent {
  isHidden = false;
  public gallery: GalleryImg[] = [
    {
      thumbSrc: 'assets/img/thumb_img1.jpg',
      src: `assets/img/img1.jpg`,
      alt: 'Italy, Sirmione',
    },
    {
      thumbSrc: 'assets/img/thumb_img2.jpg',
      src: `assets/img/img2.jpg`,
      alt: 'Italy, Venice',
    },
    {
      thumbSrc: 'assets/img/thumb_img3.jpg',
      src: `assets/img/img3.jpg`,
      alt: 'Latvia, Riga',
    },
    {
      thumbSrc: 'assets/img/thumb_img4.jpg',
      src: `assets/img/img4.jpg`,
      alt: 'Latvia, Riga',
    },
    {
      thumbSrc: 'assets/img/thumb_img5.jpg',
      src: `assets/img/img5.jpg`,
      alt: 'Spain, Barcelona',
    },
    {
      thumbSrc: 'assets/img/thumb_img6.jpg',
      src: `assets/img/img6.jpg`,
      alt: 'Spain, Barcelona',
    },
    {
      thumbSrc: 'assets/img/thumb_img7.jpg',
      src: `assets/img/img7.jpg`,
      alt: 'Spain, Montserrat',
    },
    {
      thumbSrc: 'assets/img/thumb_img8.jpg',
      src: `assets/img/img8.jpg`,
      alt: 'Latvia, Riga',
    },
    {
      thumbSrc: 'assets/img/thumb_img9.jpg',
      src: `assets/img/img9.jpg`,
      alt: 'Italy, Milan',
    },
    {
      thumbSrc: 'assets/img/thumb_img10.jpg',
      src: `assets/img/img10.jpg`,
      alt: 'Italy, Venice',
    },
    {
      thumbSrc: 'assets/img/thumb_img11.jpg',
      src: `assets/img/img11.jpg`,
      alt: 'Italy, Desenzano del Gasrda',
    },
    {
      thumbSrc: 'assets/img/thumb_img12.jpg',
      src: `assets/img/img12.jpg`,
      alt: 'Italy, Verona',
    },
    {
      thumbSrc: 'assets/img/thumb_img13.jpg',
      src: `assets/img/img13.jpg`,
      alt: 'Italy, Milan',
    },
    {
      thumbSrc: 'assets/img/thumb_img14.jpg',
      src: `assets/img/img14.jpg`,
      alt: 'Latvia, Riga',
    },
    {
      thumbSrc: 'assets/img/thumb_img15.jpg',
      src: `assets/img/img15.jpg`,
      alt: 'Latvia, Jurmala',
    },
    {
      thumbSrc: 'assets/img/thumb_img16.jpg',
      src: `assets/img/img16.jpg`,
      alt: 'Latvia, Riga',
    },
    {
      thumbSrc: 'assets/img/thumb_img17.jpg',
      src: `assets/img/img17.jpg`,
      alt: 'Latvia, Riga',
    },
    {
      thumbSrc: 'assets/img/thumb_img18.jpg',
      src: `assets/img/img18.jpg`,
      alt: 'Latvia, Jurmala',
    },
    {
      thumbSrc: 'assets/img/thumb_img19.jpg',
      src: `assets/img/img19.jpg`,
      alt: 'Latvia, Riga',
    },
    {
      thumbSrc: 'assets/img/thumb_img20.jpg',
      src: `assets/img/img20.jpg`,
      alt: 'Latvia, Riga',
    },
  ]
  public bigImg!: string;
  public isVisible: boolean = false;

  constructor(public dialog: MatDialog) {
  }

  public openDialog(img: GalleryImg): void {
    this.bigImg = img.src;
    this.dialog.open(
      GalleryDialogComponent,
      {
        data: {
          item: img,
          gallery: this.gallery,
        }
      });
  }
}

