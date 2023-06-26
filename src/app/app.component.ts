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

  @ViewChild('sidenav')
  public sideNav!: ElementRef;
  private window: Window;

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
        tap(() => this.document.querySelector('.mat-sidenav-content')?.scrollTo(0, 0))
      )
      .subscribe();
  }
}
