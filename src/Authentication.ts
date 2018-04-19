export class User {
    constructor(public id: string, public customerId: string, public username: string, public email: string,
                public passwordHash: string, public roles: string[]) {
    }

    hasAnyRole(roles: string[]): boolean {
        return this.roles.find((role) => roles.find((r) => r === role) !== undefined) !== undefined;
    }
}

export class APIKey {
    constructor(public id: string, public customerId: string, public userId: string, public value: string, public roles: string[]) {
    }
}