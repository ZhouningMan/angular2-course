import {Injectable} from "angular2/core";
import {Http, RequestOptions, Headers} from "angular2/http";
import {Observable} from "rxjs/Observable"; //slim ReactiveX from angular2
import "rxjs/add/operator/map";
import {User} from "../models/user";

@Injectable()
export class UserService {

    private _baseUrl = "http://jsonplaceholder.typicode.com/";
    private _CORSOptions = new RequestOptions({
        headers : new Headers({
            "Access-Control-Request-Method" : "GET"
        })
    });;

    constructor(private _http: Http) {
    }

    getUsers() {
        return this._http.get(this._baseUrl + "users").map(res => res.json());
    }
}
