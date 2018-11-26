"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var data_service_1 = require("./data.service");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var GithubFollowersService = (function (_super) {
    __extends(GithubFollowersService, _super);
    function GithubFollowersService(http) {
        return _super.call(this, 'https://api.github.com/users/mosh-hamedani/followers', http) || this;
    }
    return GithubFollowersService;
}(data_service_1.DataService));
GithubFollowersService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
GithubFollowersService.ctorParameters = function () { return [
    { type: http_1.Http, },
]; };
exports.GithubFollowersService = GithubFollowersService;
//# sourceMappingURL=github-followers.service.js.map