"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class AuthenticationCredentials {
    constructor(id, customerId, roles, type) {
        this.id = id;
        this.customerId = customerId;
        this.roles = roles;
        this.type = type;
    }
    hasAnyRole(roles) {
        return this.roles.find((role) => roles.find((r) => r === role) !== undefined) !== undefined;
    }
    isRoot() {
        return this.roles.find((role) => role === 'ROLE_ROOT') !== undefined;
    }
}
exports.AuthenticationCredentials = AuthenticationCredentials;
var AuthenticationType;
(function (AuthenticationType) {
    AuthenticationType["USER"] = "USER";
    AuthenticationType["TOKEN"] = "TOKEN";
})(AuthenticationType = exports.AuthenticationType || (exports.AuthenticationType = {}));
class User {
    constructor(id, customerId, username, email, passwordHash, roles, authenticationStatus = null) {
        this.id = id;
        this.customerId = customerId;
        this.username = username;
        this.email = email;
        this.passwordHash = passwordHash;
        this.roles = roles;
        this.authenticationStatus = authenticationStatus;
    }
    hasAnyRole(roles) {
        return this.roles.find((role) => roles.find((r) => r === role) !== undefined) !== undefined;
    }
}
exports.User = User;
var AuthenticationStatus;
(function (AuthenticationStatus) {
    AuthenticationStatus[AuthenticationStatus["LOGGED"] = 0] = "LOGGED";
    AuthenticationStatus[AuthenticationStatus["LOGGING"] = 1] = "LOGGING";
    AuthenticationStatus[AuthenticationStatus["LOGGED_OUT"] = 2] = "LOGGED_OUT";
    AuthenticationStatus[AuthenticationStatus["WRONG_PASSWORD"] = 3] = "WRONG_PASSWORD";
    AuthenticationStatus[AuthenticationStatus["NOT_LOGGED"] = 4] = "NOT_LOGGED";
})(AuthenticationStatus = exports.AuthenticationStatus || (exports.AuthenticationStatus = {}));
class APIKey {
    constructor(id, customerId, userId, value, roles) {
        this.id = id;
        this.customerId = customerId;
        this.userId = userId;
        this.value = value;
        this.roles = roles;
    }
}
exports.APIKey = APIKey;
//# sourceMappingURL=Authentication.js.map