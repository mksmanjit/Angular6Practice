"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = require("@angular/platform-browser");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
var home_component_1 = require("./home/home.component");
var about_component_1 = require("./about/about.component");
var navbar_component_1 = require("./navbar/navbar.component");
var github_followers_component_1 = require("./github-followers/github-followers.component");
var github_followers_service_1 = require("./github-followers/github-followers.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule.decorators = [
    { type: core_1.NgModule, args: [{
                declarations: [
                    app_component_1.AppComponent,
                    home_component_1.HomeComponent,
                    github_followers_component_1.GithubFollowersComponent,
                    about_component_1.AboutComponent,
                    navbar_component_1.NavbarComponent
                ],
                imports: [
                    platform_browser_1.BrowserModule,
                    http_1.HttpModule,
                    router_1.RouterModule.forRoot([
                        { path: '', component: home_component_1.HomeComponent },
                        { path: 'followers', component: github_followers_component_1.GithubFollowersComponent }
                    ])
                ],
                providers: [
                    github_followers_service_1.GithubFollowersService
                ],
                bootstrap: [app_component_1.AppComponent]
            },] },
];
/** @nocollapse */
AppModule.ctorParameters = function () { return []; };
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map