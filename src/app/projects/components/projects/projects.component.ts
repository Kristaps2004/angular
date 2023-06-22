import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs";
import {GithubRepo} from "../../interfaces/github-repo.interface";


@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {
  public githubRepos: GithubRepo[] = [];
  private githubReposImage: { name: string, image: string } [] = [
    {
      name: 'angular',
      image: 'https://repository-images.githubusercontent.com/653585193/c8851ba1-ea86-455f-8e46-a002fe451f6b'
    }
  ];

  constructor(private http: HttpClient) {
    this.fetchData();
  }

  public fetchData(): void {
    const url = "https://api.github.com/users/Kristaps2004/repos";
    this.http.get<GithubRepo[]>(url)
      .pipe(
        take(1)
      )
      .subscribe(
        (response: GithubRepo[]) => {
          this.githubRepos = response.map(
            (repo) => {
              repo.image = this.githubReposImage.find(
                (repoImage) => repoImage.name === repo.name
              )?.image;

              return repo;
            }
          );
        }
      )
  }
}
