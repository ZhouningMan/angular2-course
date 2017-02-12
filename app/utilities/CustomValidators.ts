import {Control} from "angular2/common";

export class CustomValidators {
    static validateEmail(control: Control) {
        let EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)+$/i;
        return EMAIL_REGEXP.test(control.value) ? null : {
            validateEmail:{
                invalidEmail: true,
                example:"name@example.com"
            }
        };
    }
}
