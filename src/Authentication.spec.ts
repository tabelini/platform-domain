import {AuthenticationCredentials, AuthenticationType, User} from './Authentication';


describe('AuthenticationCredentials', () => {

    const defaultAuth = new AuthenticationCredentials('id', 'customerId', ['ROLE_ADMIN', 'ROLE_ROOT'],
        AuthenticationType.USER);

    const limitedAuth = new AuthenticationCredentials('id', 'customerId', ['ROLE_ADMIN', 'ROLE_USER'],
        AuthenticationType.USER);

    describe('hasAnyRole', () => {
        test('should return false if the user does not have any of the roles', () => {
            expect(defaultAuth.hasAnyRole(['NON_EXISTENT', 'NON_EXISTENT_TOO'])).toBeFalsy();
        });

        test('should return true if the user does have any of the roles', () => {
            expect(defaultAuth.hasAnyRole(['NON_EXISTENT', 'ROLE_ROOT'])).toBeTruthy();
        });
    });

    describe('isRoot', () => {
        test('should return false if the user do not  have the ROOT role', () => {
            expect(limitedAuth.isRoot()).toBeFalsy();
        });

        test('should return true if the user have the ROOT role', () => {
            expect(defaultAuth.isRoot()).toBeTruthy();
        });
    });
});

describe('User', () => {

    const defaultUser = new User('id', 'customerId', 'username', 'email@email.com',
        'kdjfkjf', ['ROLE_ADMIN', 'ROLE_ROOT']);

    describe('hasAnyRole', () => {
        test('should return false if the user does not have any of the roles', () => {
            expect(defaultUser.hasAnyRole(['NON_EXISTENT', 'NON_EXISTENT_TOO'])).toBeFalsy();
        });

        test('should return true if the user does have any of the roles', () => {
            expect(defaultUser.hasAnyRole(['NON_EXISTENT', 'ROLE_ROOT'])).toBeTruthy();
        });
    });
});