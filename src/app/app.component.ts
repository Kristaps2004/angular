import {Component, ElementRef, Inject, ViewChild} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {filter, tap} from "rxjs";
import {DOCUMENT} from "@angular/common";


@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {

  private window :  Window;

  @ViewChild('sidenav')
  public sideNav!: ElementRef;

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private router: Router,
  ) {
    this.window = this.document.defaultView as Window;
    this.router.events
      .pipe(
        filter(
          (event) => event instanceof NavigationEnd
        ),
        tap((event) => this.document.querySelector('.mat-sidenav-content')?.scrollTo(0, 0))
      )
      .subscribe();
  }
}
