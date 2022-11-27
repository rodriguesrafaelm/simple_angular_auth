import { FormGroup } from "@angular/forms";

export function senhasDiferentesValidator(formGroup: FormGroup){

const password = formGroup.get('password')?.value ?? '';
const password2 = formGroup.get('password2')?.value ?? '';

if (password.trim() + password2.trim()){
  return password == password2 ? null : {senhasDiferentes: true};
} else {
  return null;
}


}
