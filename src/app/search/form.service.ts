import { Injectable } from '@angular/core';

@Injectable()

export class FormService {

  constructor() { }

  valueNotNull(value: string) {
    if (value === undefined) {
      return '';
    } else {
      return value;
    }
  }
}
