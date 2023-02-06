import { AbstractControl } from '@angular/forms';

export function AgeValidator(control: AbstractControl): { [key: string]: boolean } | null {
  if (control.value > 100 && control.value!=Number) {
    return { 'age': true };
  }
  return null;
}