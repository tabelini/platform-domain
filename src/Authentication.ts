export class AuthenticationCredentials {
    constructor(public id: string, public customerId: string, public roles: string[], public type: AuthenticationType) {
    }

    hasAnyRole(roles: string[]): boolean {
        return this.roles.find((role) => roles.find((r) => r === role) !== undefined) !== undefined;
    }

    isRoot(): boolean {
        return this.roles.find((role) => role === 'ROLE_ROOT') !== undefined;
    }
}

export enum AuthenticationType {
    USER = 'USER',
    TOKEN = 'TOKEN',
}

export class User {
    constructor(public id: string, public customerId: string, public username: string, public email: string,
                public passwordHash: string, public roles: string[], public authenticationStatus: AuthenticationStatus) {
    }

    hasAnyRole(roles: string[]): boolean {
        return this.roles.find((role) => roles.find((r) => r === role) !== undefined) !== undefined;
    }
}

export enum AuthenticationStatus {
    LOGGED,
    LOGGING,
    LOGGED_OUT,
    WRONG_PASSWORD,
}

export class APIKey {
    constructor(public id: string, public customerId: string, public userId: string, public value: string, public roles: string[]) {
    }
}