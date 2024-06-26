import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Email } from '../email';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-email-form',
  templateUrl: './email-form.component.html',
  styleUrls: ['./email-form.component.css'],
})
export class EmailFormComponent {
  emailForm!: FormGroup;

  @Input()
  email!: Email;

  @Output() emailSubmit = new EventEmitter();

  constructor() {}

  ngOnInit() {
    const { subject, from, to, text } = this.email;

    this.emailForm = new FormGroup({
      to: new FormControl(to, [Validators.required, Validators.email]),
      from: new FormControl({ value: from, disabled: true }),
      subject: new FormControl(subject, [Validators.required]),
      text: new FormControl(text, [Validators.required]),
    });
  }

  onSubmit() {
    if (this.emailForm.invalid) {
      return;
    }

    this.emailSubmit.emit(this.emailForm.value);

    //ako hocemo da vidimo FROM koji je disabled
    //console.log(this.emailForm.getRawValue());
  }
}
