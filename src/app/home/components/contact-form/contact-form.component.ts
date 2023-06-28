import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FormGroup} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {
  @Input()
  public profileForm!: FormGroup;

  @Input()
  public errorMessage!: string;

  @Output()
  public onSubmit: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  public onOpenSnackBar: EventEmitter<void> = new EventEmitter<void>();

  public submitForm(): void {
    this.onSubmit.emit();
  }

  public openSnackBar(): void {
    this.onOpenSnackBar.emit();
  }
}
