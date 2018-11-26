"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var AppErrorHandler = (function () {
    function AppErrorHandler() {
    }
    AppErrorHandler.prototype.handleError = function (error) {
        alert('An unexpected error occurred.');
        console.log(error);
    };
    return AppErrorHandler;
}());
exports.AppErrorHandler = AppErrorHandler;
//# sourceMappingURL=app-error-handler.js.map