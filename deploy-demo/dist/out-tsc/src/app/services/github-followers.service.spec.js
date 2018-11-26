"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var github_followers_service_1 = require("./github-followers.service");
describe('GithubFollowersService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [github_followers_service_1.GithubFollowersService]
        });
    });
    it('should be created', testing_1.inject([github_followers_service_1.GithubFollowersService], function (service) {
        expect(service).toBeTruthy();
    }));
});
//# sourceMappingURL=github-followers.service.spec.js.map