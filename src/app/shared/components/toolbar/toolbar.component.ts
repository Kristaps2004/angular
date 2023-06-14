import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent {
  @Output()
  public toggleSideNav: EventEmitter<void> = new EventEmitter<void>();

  public onToggleSideNav(): void {
    this.toggleSideNav.emit();
  }
}

