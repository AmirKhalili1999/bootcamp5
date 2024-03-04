import {AbstractControl, FormGroup, ValidationErrors} from '@angular/forms';

export interface AllValidationErrors {
  controlName: string;
  controlErrorLabel: string;
  errorName: string;
  errorValue: any;
}

export interface FormGroupControls {
  [key: string]: AbstractControl;
}

export function getFormValidationErrors(controls: FormGroupControls): AllValidationErrors[] {
  let errors: AllValidationErrors[] = [];
  Object.keys(controls).forEach(key => {
    const control = controls[key];
    if (control instanceof FormGroup) {
      errors = errors.concat(getFormValidationErrors(control.controls));
    }
    // @ts-ignore
    const controlErrors: ValidationErrors = controls[key].errors;
    if (controlErrors !== null) {
      Object.keys(controlErrors).forEach(keyError => {
        errors.push({
          controlName: key,
          // @ts-ignore
          controlErrorLabel: (document.getElementById(key) && document.getElementById(key).getAttribute('error-label')) ? document.getElementById(key).getAttribute('error-label') : key,
          errorName: keyError,
          errorValue: controlErrors[keyError]
        });
      });
    }
  });
  return errors;
}
