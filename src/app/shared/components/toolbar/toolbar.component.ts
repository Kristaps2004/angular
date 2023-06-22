import {Component, EventEmitter, Output} from '@angular/core';
import {ThemeService} from "../../services/theme.service";
import {Observable, startWith} from "rxjs";
import {MatSlideToggleChange} from "@angular/material/slide-toggle";

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

  onThemeChange(slideValue: MatSlideToggleChange) {
    this.themeService.toggleDarkTheme(slideValue.checked)
  }
}

