import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-rective-form',
  templateUrl: './rective-form.component.html',
  styleUrls: ['./rective-form.component.scss']
})
export class RectiveFormComponent implements OnInit {
  inscriptionForm: FormGroup;
  eyeOff = true;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.inscriptionForm = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(5)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

  get password() {
    return this.inscriptionForm.get('password');
  }

  get userName() {
    return this.inscriptionForm.get('userName');
  }

  get email() {
    return this.inscriptionForm.get('email');
  }

  onClick() {
    console.log(this.inscriptionForm);
  }

  onEyeClick() {
    console.log(this.password);
    this.eyeOff = !this.eyeOff;
  }
}
