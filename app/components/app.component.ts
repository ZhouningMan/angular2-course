import {Component} from 'angular2/core';
import {NavBarComponent} from "./navbar.component";
import {HomeComponent} from "./home.component";
import {UsersComponent} from "./users.component";
import {PostsComponent} from "./posts.component";
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";

@RouteConfig([
    { path: '/', name: 'Home', component: HomeComponent }, //root path
 	{ path: '/users', name: 'Users', component: UsersComponent },
 	{ path: '/posts', name: 'Posts', component: PostsComponent },
 	{ path: '/*other', name: 'Other', redirectTo: ['Home'] }   //redirect non-existing path to home
])
@Component({
    selector: 'my-app',
    template: `
        <navbar></navbar>
        <div class="container">
            <router-outlet></router-outlet>
        </div>
    `, //router-outlet is where real content is rendered
    directives: [NavBarComponent, ROUTER_DIRECTIVES]
})
export class AppComponent { }
