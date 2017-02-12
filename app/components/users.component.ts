import {Component, OnInit} from 'angular2/core';
import {UserService} from "../services/user.service";
import {HTTP_PROVIDERS} from 'angular2/http';
import {User} from "../models/user";

@Component({
    templateUrl:"app/components/templates/users.component.html",
    providers:[HTTP_PROVIDERS, UserService]
})
export class UsersComponent implements OnInit{

    private _users: User[]
    constructor(private _userService:UserService) {}

    ngOnInit() {
        this._userService.getUsers().subscribe(
            res => {
                this._users = res;
                console.log(this._users);
            }
        );
    }

}
