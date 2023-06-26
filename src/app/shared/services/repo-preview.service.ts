import {Injectable} from '@angular/core';
import {GithubRepo} from "../../projects/interfaces/github-repo.interface";
import {BehaviorSubject, Observable, take} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class RepoPreviewService {
  public githubRepos$: Observable<GithubRepo[]>;
  private githubReposImage: { name: string, image: string } [] = [
    {
      name: 'angular',
      image: 'https://repository-images.githubusercontent.com/653585193/c8851ba1-ea86-455f-8e46-a002fe451f6b'
    }
  ];

  private githubRepoSubject: BehaviorSubject<GithubRepo[]> = new BehaviorSubject<GithubRepo[]>([]);

  constructor(private http: HttpClient) {
    this.githubRepos$ = this.githubRepoSubject.asObservable();
  }

  public fetchData(): void {
    const url = "https://api.github.com/users/Kristaps2004/repos";
    this.http.get<GithubRepo[]>(url)
      .pipe(
        take(1)
      )
      .subscribe(
        (response: GithubRepo[]) => {
          this.githubRepoSubject.next(response.map(
            (repo) => {
              repo.image = this.githubReposImage.find(
                (repoImage) => repoImage.name === repo.name
              )?.image;

              return repo;
            }
          ));
        }
      )
  }
}
