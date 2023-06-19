import {Component} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {take} from "rxjs";
import {GithubRepo} from "../../interfaces/github-repo.interface";

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  public githubRepos :GithubRepo[] = [];
  constructor(private http: HttpClient) {
    this.fetchData();

  }

  public fetchData() : void{
    const url = "https://api.github.com/users/Kristaps2004/repos";
    this.http.get<GithubRepo[]>(url)
      .pipe(
        take(1)
      )
      .subscribe(
        (response : GithubRepo[]) => {
          this.githubRepos = response;
        }
      )
  }
}
