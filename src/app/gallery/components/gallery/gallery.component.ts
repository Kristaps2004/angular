import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent {
  gallery: { src: string; alt: string }[] = [
    {
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      alt: 'ok',
    },
    {
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      alt: 'ok',
    },
    {
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      alt: 'ok',
    },
    {
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      alt: 'ok',
    }, {
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      alt: 'ok',
    }, {
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      alt: 'ok',
    },
    {
      src: 'https://material.angular.io/assets/img/examples/shiba2.jpg',
      alt: 'ok',
    }
  ]
}
