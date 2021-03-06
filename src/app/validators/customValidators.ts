import {AbstractControl} from '@angular/forms';

export function ageValidator(min: number, max: number) {      //factory function

  return (control: AbstractControl): { [key: string]: boolean } | null => {

    if (control.value !== null && (isNaN(control.value) || control.value < min || control.value > max)) {
      return {'ageValidator': true};
    }
    return null;
  };
}

export function passwordValidator() {
  return (control: AbstractControl): { [key: string]: boolean } | null => {
    const firstCharacter = control.value.charAt(0);
    if (control.value !== null && firstCharacter === firstCharacter.toLowerCase()) {
      return {'passwordValidator': true};
    }
    return null;
  };
}
