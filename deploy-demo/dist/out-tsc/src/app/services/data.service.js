"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bad_input_1 = require("./../common/bad-input");
var not_found_error_1 = require("./../common/not-found-error");
var app_error_1 = require("./../common/app-error");
var http_1 = require("@angular/http");
var core_1 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/observable/throw");
function dataServiceFactory(url, http) {
    return new DataService(url, http);
}
exports.dataServiceFactory = dataServiceFactory;
var DataService = (function () {
    function DataService(url, http) {
        this.url = url;
        this.http = http;
    }
    DataService.prototype.getAll = function () {
        return this.http.get(this.url)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.get = function (id) {
        return this.http.get(this.url + '/' + id)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.create = function (resource) {
        return this.http.post(this.url, JSON.stringify(resource))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.update = function (resource) {
        return this.http.patch(this.url + '/' + resource.id, JSON.stringify({ isRead: true }))
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    DataService.prototype.delete = function (id) {
        return this.http.delete(this.url + '/' + id)
            .map(function (response) { return response.json(); })
            .toPromise()
            .catch(this.handleError);
    };
    DataService.prototype.handleError = function (error) {
        if (error.status === 400)
            return Observable_1.Observable.throw(new bad_input_1.BadInput(error.json()));
        if (error.status === 404)
            return Observable_1.Observable.throw(new not_found_error_1.NotFoundError());
        return Observable_1.Observable.throw(new app_error_1.AppError(error));
    };
    return DataService;
}());
DataService.decorators = [
    { type: core_1.Injectable },
];
/** @nocollapse */
DataService.ctorParameters = function () { return [
    null,
    { type: http_1.Http, },
]; };
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map