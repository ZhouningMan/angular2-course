import {Component} from "angular2/core";
import {ROUTER_DIRECTIVES, Router} from "angular2/router";

@Component({
    selector:"navbar",
    templateUrl: "app/components/templates/navbar.component.html",
    directives:[ROUTER_DIRECTIVES]
})
export class NavBarComponent {

    constructor(private router: Router) {
        
    }

}
