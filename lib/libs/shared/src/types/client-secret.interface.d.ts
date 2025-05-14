import UserRepresentation from '@keycloak/keycloak-admin-client/lib/defs/userRepresentation';
export interface IClientSecret {
    domainName: string;
    clientId: string;
    clientSecret: string;
    createdAt: Date;
    updatedAt: Date;
}
export interface IUserCreate extends UserRepresentation {
    realm: string;
}
export interface ICustomerRegister {
    username: string;
    password: string;
    firstName?: string;
}
export interface ICustomerLogin {
    username: string;
    password: string;
}
export interface IValidationPattern {
    email: RegExp;
    phone: RegExp;
}
