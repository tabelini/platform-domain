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

    static fromJson(json: any): User {
        const object: User = Object.create(User.prototype);
        Object.assign(object, json);
        return object;
    }

    constructor(public id: string, public customerId: string, public username: string, public email: string,
                public passwordHash: string, public roles: string[], public authenticationStatus: AuthenticationStatus = null) {
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
    UNKNOWN_ERROR,
    NOT_LOGGED,
}

export class APIKey {
    constructor(public id: string, public customerId: string, public userId: string, public value: string, public roles: string[]) {
    }
}

export interface LoginResponse {
    token: string;
    user: User;
}