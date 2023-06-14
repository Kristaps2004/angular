import {Component} from '@angular/core';
import {Router} from "@angular/router";


@Component({
  selector: 'app-portfolio-card',
  templateUrl: './portfolio-card.component.html',
  styleUrls: ['./portfolio-card.component.scss']
})
export class PortfolioCardComponent {

  protected readonly onclick = onclick;

  constructor(
    private router: Router
  ) {
  }

  clickButton(path: string) {
    this.router.navigate([path]);
  }
}


