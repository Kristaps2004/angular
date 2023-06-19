import {Component, Input} from '@angular/core';
import {AboutImg} from "../../interfaces/about-img.interface";


@Component({
  selector: 'app-project-img',
  templateUrl: './project-img.component.html',
  styleUrls: ['./project-img.component.scss']
})
export class ProjectImgComponent {
  @Input()
  public item!: AboutImg;

}


