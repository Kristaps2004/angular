import {Component, HostListener} from '@angular/core';
import {GithubRepo} from "../../../projects/interfaces/github-repo.interface";
import {map, Observable} from "rxjs";
import {RepoPreviewService} from "../../../shared/services/repo-preview.service";

@Component({
  selector: 'app-projects-preview',
  templateUrl: './projects-preview.component.html',
  styleUrls: ['./projects-preview.component.scss']
})
export class ProjectsPreviewComponent {
  public githubRepos$: Observable<GithubRepo[]>;
  public columnNum: number = 3;

  constructor(
    private repoPreviewService: RepoPreviewService,
  ) {
    this.githubRepos$ = this.repoPreviewService.githubRepos$
      .pipe(
        map(
          (repos: GithubRepo[]) => repos.slice(0, 3)
        )
      );
    this.repoPreviewService.fetchData();
  }

  public goToUrl(link: string): void {
    window.open(link, '_blank');
  }

  @HostListener("window:resize", []) update() {

    switch (true) {
      case window.innerWidth >= 1100:
        this.columnNum = 3;
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
