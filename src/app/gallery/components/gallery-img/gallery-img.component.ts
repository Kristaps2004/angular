import {Component, EventEmitter, Input, Output} from '@angular/core';
import {GalleryImg} from "../../interfaces/gallery-img.interface";

@Component({
  selector: 'app-gallery-img',
  templateUrl: './gallery-img.component.html',
  styleUrls: ['./gallery-img.component.scss']
})
export class GalleryImgComponent {

  @Input()
  public item!: GalleryImg;
  protected readonly onclick = onclick;

  @Output()
  private imgClick: EventEmitter<void> = new EventEmitter<void>();


  public onClick(): void {
    this.imgClick.emit();
  }
}
