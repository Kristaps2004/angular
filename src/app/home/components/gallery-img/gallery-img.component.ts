import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-gallery-img',
  templateUrl: './gallery-img.component.html',
  styleUrls: ['./gallery-img.component.scss']
})
export class GalleryImgComponent {
  @Input()
  public img!: string;

  @Input()
  public alt!: string;
}
