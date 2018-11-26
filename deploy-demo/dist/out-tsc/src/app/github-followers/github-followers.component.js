"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var github_followers_service_1 = require("./github-followers.service");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/combineLatest");
require("rxjs/add/operator/map");
require("rxjs/add/operator/switchMap");
var GithubFollowersComponent = (function () {
    function GithubFollowersComponent(route, service) {
        this.route = route;
        this.service = service;
    }
    GithubFollowersComponent.prototype.ngOnInit = function () {
        var _this = this;
        Observable_1.Observable.combineLatest([
            this.route.paramMap,
            this.route.queryParamMap
        ])
            .switchMap(function (combined) {
            var id = combined[0].get('id');
            var page = combined[1].get('page');
            return _this.service.getFollowers();
        })
            .subscribe(function (followers) { return _this.followers = followers; });
    };
    return GithubFollowersComponent;
}());
GithubFollowersComponent.decorators = [
    { type: core_1.Component, args: [{
                selector: 'github-followers',
                templateUrl: './github-followers.component.html',
                styleUrls: ['./github-followers.component.css']
            },] },
];
/** @nocollapse */
GithubFollowersComponent.ctorParameters = function () { return [
    { type: router_1.ActivatedRoute, },
    { type: github_followers_service_1.GithubFollowersService, },
]; };
exports.GithubFollowersComponent = GithubFollowersComponent;
//# sourceMappingURL=github-followers.component.js.map