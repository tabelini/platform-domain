"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Authentication_1 = require("./Authentication");
describe('User', function () {
    var defaultUser = new Authentication_1.User('id', 'customerId', 'username', 'email@email.com', 'kdjfkjf', ['ROLE_ADMIN', 'ROLE_ROOT']);
    describe('hasAnyRole', function () {
        test('should return false if the user does not have any of the roles', function () {
            expect(defaultUser.hasAnyRole(['NON_EXISTENT', 'NON_EXISTENT_TOO'])).toBeFalsy();
        });
        test('should return true if the user does have any of the roles', function () {
            expect(defaultUser.hasAnyRole(['NON_EXISTENT', 'ROLE_ROOT'])).toBeTruthy();
        });
    });
});
