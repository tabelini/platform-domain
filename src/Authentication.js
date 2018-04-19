"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(id, customerId, username, email, passwordHash, roles) {
        this.id = id;
        this.customerId = customerId;
        this.username = username;
        this.email = email;
        this.passwordHash = passwordHash;
        this.roles = roles;
    }
    User.prototype.hasAnyRole = function (roles) {
        return this.roles.find(function (role) { return roles.find(function (r) { return r === role; }) !== undefined; }) !== undefined;
    };
    return User;
}());
exports.User = User;
var APIKey = /** @class */ (function () {
    function APIKey(id, customerId, userId, value, roles) {
        this.id = id;
        this.customerId = customerId;
        this.userId = userId;
        this.value = value;
        this.roles = roles;
    }
    return APIKey;
}());
exports.APIKey = APIKey;
