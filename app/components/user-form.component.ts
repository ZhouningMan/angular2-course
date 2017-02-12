import {Component} from "angular2/core";
import {ControlGroup, Control, Validators, FormBuilder} from "angular2/common";
import {CustomValidators} from "../utilities/CustomValidators";

@Component({
    templateUrl: "app/components/templates/user-form.component.html",
})
export class UserFormComponent {
    form: ControlGroup;

    constructor(formBuilder: FormBuilder) {
        this.form = formBuilder.group({
            name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
            email: ['', Validators.compose([Validators.required, CustomValidators.validateEmail])],
            phone: [''],
            street: [''],
            suite: [''],
            city: [''],
            zipCode: [""]
        });
    }
}
