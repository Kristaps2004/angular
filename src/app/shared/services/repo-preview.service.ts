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
      name: 'Projekts-Lidosta-DP11-3Grupa',
      image: 'https://repository-images.githubusercontent.com/368505861/52f93c5c-ea83-4a29-9122-8b87e5d6f615'
    },
    {
      name: 'Kafejnica-projekts',
      image: 'https://repository-images.githubusercontent.com/480921182/f7a81107-44f4-426f-8767-7e998b9ab67b'
    },
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
