import {Injectable} from '@angular/core';
import {GithubRepo} from "../../projects/interfaces/github-repo.interface";
import {
  BehaviorSubject,
  debounceTime,
  distinctUntilChanged,
  map,
  Observable,
  startWith,
  take,
  tap,
  withLatestFrom
} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {FormControl, FormGroup} from "@angular/forms";

@Injectable({
  providedIn: 'root'
})
export class RepoPreviewService {
  public searchForm: FormGroup = new FormGroup({
    name: new FormControl(),
  });
  public githubRepos$: Observable<GithubRepo[]>;
  public errorMessage$: Observable<string | null>;
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
  private errorMessageSubject: BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private http: HttpClient) {
    this.errorMessage$ = this.errorMessageSubject.asObservable();
    this.githubRepos$ = this.searchForm.get('name')?.valueChanges
      .pipe(
        startWith(''),
        debounceTime(300),
        distinctUntilChanged(),
        withLatestFrom(this.githubRepoSubject.asObservable()),
        map(
          ([filter, githubRepos]: [string, GithubRepo[]]) => {
            console.log({filter, githubRepos})
            if (filter?.length > 0) {
              return githubRepos.filter(
                (githubRepo) => githubRepo.name.toLowerCase().includes(filter.toLowerCase())
              )
            }
            return githubRepos
          }
        ),
        tap(
          (githubRepos) => {
            if (githubRepos.length === 0) {
              this.errorMessageSubject.next('Could not find any projects')
            } else {
              this.errorMessageSubject.next(null)
            }
          }
        )
      ) as Observable<GithubRepo[]>;
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
