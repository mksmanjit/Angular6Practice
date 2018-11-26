"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var DeployDemoPage = (function () {
    function DeployDemoPage() {
    }
    DeployDemoPage.prototype.navigateTo = function () {
        return protractor_1.browser.get('/');
    };
    DeployDemoPage.prototype.getParagraphText = function () {
        return protractor_1.element(protractor_1.by.css('app-root h1')).getText();
    };
    return DeployDemoPage;
}());
exports.DeployDemoPage = DeployDemoPage;
//# sourceMappingURL=app.po.js.map