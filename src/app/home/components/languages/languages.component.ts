import {Component, Input} from '@angular/core';
import {PeriodicElement} from "../home/home.component";

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent {
  @Input()
  public dataSource: PeriodicElement[] = [];

  @Input()
  public displayedColumns: string[] = [];
}
