import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogModule} from "@angular/material/dialog";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";

@Component({
  selector: 'app-gallery-dialog',
  templateUrl: './gallery-dialog.component.html',
  styleUrls: ['./gallery-dialog.component.scss'],
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatCardModule, MatIconModule, MatMenuModule],
})
export class GalleryDialogComponent {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { img: string }) {
  }
}
