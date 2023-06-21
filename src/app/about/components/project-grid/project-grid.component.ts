import {Component, HostListener, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {GithubRepo} from "../../interfaces/github-repo.interface";


@Component({
  selector: 'app-project-grid',
  templateUrl: './project-grid.component.html',
  styleUrls: ['./project-grid.component.scss']
})
export class ProjectGridComponent implements OnInit{
  @Input()
  public githubRepos: GithubRepo[] = []

  constructor(@Inject(DOCUMENT) private document: Document) {
  }


  public goToUrl(link: string): void {
    window.open(link, '_blank');
  }

  columnNum : number = 3;

  @HostListener("window:resize", []) update() {

    if (window.innerWidth >= 2500) {
      this.columnNum = 5;
    } else if (window.innerWidth >= 2000) {
      this.columnNum = 4;
    } else if (window.innerWidth >= 1200) {
      this.columnNum = 3;
    } else if (window.innerWidth >= 992) {
      this.columnNum = 2;
    } else if (window.innerWidth  >= 700) {
      this.columnNum = 2;
    } else if (window.innerWidth < 700) {
      this.columnNum = 1;
    }
  }

  ngOnInit(): void {
    this.update()
  }
}
