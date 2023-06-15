import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-gallery-img',
  templateUrl: './gallery-img.component.html',
  styleUrls: ['./gallery-img.component.scss']
})
export class GalleryImgComponent {

  @Input()
  public item!: { src: string; alt: string; thumbSrc: string };
  protected readonly onclick = onclick;

  @Output()
  private imgClick: EventEmitter<void> = new EventEmitter<void>();


  public onClick(): void {
    this.imgClick.emit();
  }
}
