import { Injectable } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';

@Injectable()

export class FormService {

  values: any;

  constructor() { }

  valueNotNull(value: string) {
    if (value === undefined) {
      return '';
    } else {
      return value;
    }
  }

  getNewObject() {
    return {
      region: '',
      incomeLevel: '',
      lendingType: '',
      nCountries: '',
    };
  }

  isNotNumber(control: AbstractControl) {
    const value = control.value;
    if (!isNaN(value)) {
        return null;
    }
    return { isNotNumber: 'It must be a number' };
  }

  hasError(controlName: string, errorName: string, form: FormGroup) {
    const control = form.controls[controlName];
    return control.hasError(errorName);
  }


}
