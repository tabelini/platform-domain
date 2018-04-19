import {User} from './Authentication';


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