"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
require("rxjs/add/operator/map");
var GithubFollowersService = (function () {
    function GithubFollowersService(http) {
        this.http = http;
        this._url = 'https://api.github.com/users/mosh-hamedani/followers';
    }
    GithubFollowersService.prototype.getFollowers = function () {
        return this.http.get(this._url)
            .map(function (response) { return response.json(); });
    };
    return GithubFollowersService;
}());
GithubFollowersService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
GithubFollowersService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.GithubFollowersService = GithubFollowersService;
//# sourceMappingURL=github-followers.service.js.map