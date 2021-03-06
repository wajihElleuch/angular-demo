import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ageValidator, passwordValidator} from '../validators/customValidators';

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
      userName: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, passwordValidator()]],
      age: ['', [Validators.required, ageValidator(10, 50)]]
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

  get age() {
    return this.inscriptionForm.get('age');
  }

  onClick() {

  }

  onEyeClick() {

    this.eyeOff = !this.eyeOff;
  }
}
