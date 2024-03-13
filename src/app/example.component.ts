import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-example',
  templateUrl: 'example.component.html',
  styleUrls: ['example.component.css'],
})
export class ExampleComponent {
  exampleForm = this.fb.group({
    username: ['', Validators.required],
  });

  constructor(private fb: FormBuilder) {}

  submitForm() {
    console.log(
      'Form Control Value:',
      this.exampleForm.controls.username.value
    );
  }
}
