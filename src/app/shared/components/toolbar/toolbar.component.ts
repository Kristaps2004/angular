import {Component, EventEmitter, Output} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {Observable, startWith, take, tap} from "rxjs";

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output()
  public toggleSideNav: EventEmitter<void> = new EventEmitter<void>();

  public isDarkTheme$: Observable<boolean>;

  constructor(
    public themeService: ThemeService,
  ) {
    this.isDarkTheme$ = this.themeService.isDarkTheme$
      .pipe(
        startWith(false)
      );
  }

  public onToggleSideNav(): void {
    this.toggleSideNav.emit();
  }

  onThemeChange() {
    this.themeService.isDarkTheme$
      .pipe(
        take(1),
        tap(
          (isDarkTheme) => {
            console.log({isDarkTheme});
            this.themeService.toggleDarkTheme(!isDarkTheme);
          }
        )
      )
      .subscribe();
  }
}
