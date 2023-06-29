import {Injectable, Renderer2, RendererFactory2} from '@angular/core';
import {BehaviorSubject, Observable, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ThemeService {

  public isDarkTheme$: Observable<boolean>;

  private isDarkThemeSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>((localStorage.getItem('darkMode') === 'true'));

  private renderer: Renderer2;

  constructor(
    private rendererFactory: RendererFactory2,
  ) {
    this.renderer = this.rendererFactory.createRenderer(null, null)
    this.isDarkTheme$ = this.isDarkThemeSubject.asObservable()
      .pipe(
        tap(
          (isVisible: boolean) => {
            if (isVisible) {
              this.renderer.addClass(document.body, 'darkMode');
              localStorage.setItem('darkMode', 'true');
            } else {
              this.renderer.removeClass(document.body, 'darkMode');
              localStorage.setItem('darkMode', 'false');
            }
          }
        )
      );
  }

  public toggleDarkTheme(visible: boolean): void {
    this.isDarkThemeSubject.next(visible);
  }
}
