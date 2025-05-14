import UserRepresentation from '@keycloak/keycloak-admin-client/lib/defs/userRepresentation';
import { tags } from 'typia';
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
export interface ICustomerOTP {
    email: string & tags.Format<'email'>;
}
export interface ICustomerResetPassword {
    email: string & tags.Format<'email'>;
    otp: string & tags.MinLength<6> & tags.MaxLength<6>;
    password: string;
    confirmPassword: string;
}
