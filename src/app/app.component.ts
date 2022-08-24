import { Component, VERSION } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import moment from 'moment';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent {
  name = 'Angular ' + VERSION.major;
  form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      remember: [true],
      date: [moment().set({ dates: 1 }).format('YYYY/MM/DD')],
    });
    console.log(this.form);
    this.form.valueChanges.subscribe((value) => console.log(value));
  }
}
