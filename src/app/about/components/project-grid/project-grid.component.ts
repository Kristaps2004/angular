import {Component, Inject, Input} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {AboutImg} from "../../interfaces/about-img.interface";
import {GithubRepo} from "../../interfaces/github-repo.interface";

@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent {
  public gallery: AboutImg[] = [
    {
      thumbSrc: 'assets/img/thumb_img1.jpg',
      src: `assets/img/img1.jpg`,
      alt: 'nice'
    },
    {
      thumbSrc: 'assets/img/thumb_img1.jpg',
      src: `assets/img/img1.jpg`,
      alt: 'ok'
    },
    {
      thumbSrc: 'assets/img/thumb_img1.jpg',
      src: `assets/img/img1.jpg`,
      alt: 'ok'
    },
    {
      thumbSrc: 'assets/img/thumb_img1.jpg',
      src: `assets/img/img1.jpg`,
      alt: 'ok'
    },
  ]

  @Input()
  public githubRepos : GithubRepo[] = []

  constructor(@Inject(DOCUMENT) private document: Document){
  }


  public goToUrl(): void {
    this.document.location.href = "https://github.com/Kristaps2004";
  }
}
