import {Component, HostListener, Inject, Input, OnInit} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {GithubRepo} from "../../../projects/interfaces/github-repo.interface";
import {RepoPreviewService} from "../../services/repo-preview.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-project-card',
  templateUrl: './project-card.component.html',
  styleUrls: ['./project-card.component.scss']
})
export class ProjectCardComponent implements OnInit {
  @Input()
  public githubRepos: GithubRepo[] | null = [];

  public columnNum: number = 3;

  public errorMessage$: Observable<string | null>;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private repoPreviewService: RepoPreviewService,
    ) {
    this.errorMessage$ = this.repoPreviewService.errorMessage$;
  }

  public goToUrl(link: string): void {
    window.open(link, '_blank');
  }

  @HostListener("window:resize", []) update() {

    switch (true) {
      case window.innerWidth >= 2500:
        this.columnNum = 5;
        break;
      case window.innerWidth >= 2000:
        this.columnNum = 4;
        break;
      case window.innerWidth >= 1200:
        this.columnNum = 3;
        break;
      case window.innerWidth >= 992:
        this.columnNum = 2;
        break;
      case window.innerWidth >= 700:
        this.columnNum = 2;
        break;
      default:
        this.columnNum = 1;
        break;
    }
  }

  ngOnInit(): void {
    this.update()
  }
}
