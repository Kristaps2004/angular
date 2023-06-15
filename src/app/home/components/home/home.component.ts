import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {MatSnackBar} from "@angular/material/snack-bar";

export interface PeriodicElement {
  lang: string;
  name: string;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {lang: "Latviešu", name: "?", weight: "?", symbol: "?"},
  {lang: "Angļu", name: "?", weight: "?", symbol: "?"},
  {lang: "Krievu", name: "?", weight: "?", symbol: "?"}
];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  displayedColumns: string[] = ["lang", "name", "weight", "symbol"];

  dataSource = ELEMENT_DATA;
  profileForm = new FormGroup({
    email: new FormControl("", [Validators.required, Validators.email]),
    name: new FormControl("", [Validators.required]),
    surname: new FormControl("", [Validators.required]),
    msg: new FormControl("", [Validators.required])
  });

  constructor(private _snackBar: MatSnackBar) {
  }

  openSnackBar() {
    this._snackBar.open("Sent", "OK!");
  }

  onSubmit() {
    const formData = this.profileForm.getRawValue();
    console.warn(formData);
    this.profileForm.reset();
  }

  getErrorMessage() {
    switch (true) {
      case this.profileForm.get("name")?.hasError("required"):
        return "You must enter a name";
      case this.profileForm.get("surname")?.hasError("required"):
        return "You must enter surname";
      case this.profileForm.get("email")?.hasError("required"):
        return "Can't be empty";
      case this.profileForm.get("msg")?.hasError("required"):
        return "Can't be empty";
      default:
        return "";
    }
  }
}
