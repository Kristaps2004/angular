import {Component} from '@angular/core';
import {Observable} from "rxjs";
import {GithubRepo} from "../../interfaces/github-repo.interface";
import {RepoPreviewService} from "../../../shared/services/repo-preview.service";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
  public githubRepos$: Observable<GithubRepo[]>;

  constructor(
    private repoPreviewService: RepoPreviewService,
  ) {
    this.githubRepos$ = this.repoPreviewService.githubRepos$;
    this.repoPreviewService.fetchData();
  }

  public goToUrl(link: string): void {
    window.open(link, '_blank');
  }
}
