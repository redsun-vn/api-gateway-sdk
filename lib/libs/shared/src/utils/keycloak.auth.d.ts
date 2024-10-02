import KeycloakAdminClient from '@keycloak/keycloak-admin-client';
export declare const defaultBaseUrl: string | undefined;
export declare const defaultRealm: string | undefined;
export type GrantTypes = 'client_credentials' | 'password' | 'refresh_token';
export interface Credentials {
    username?: string;
    password?: string;
    grantType: GrantTypes;
    clientId: string;
    clientSecret?: string;
    totp?: string;
    offlineToken?: boolean;
    refreshToken?: string;
    scopes?: string[];
}
export interface Settings {
    realmName?: string;
    baseUrl?: string;
    credentials: Credentials;
    requestOptions?: RequestInit;
}
export interface TokenResponseRaw {
    access_token: string;
    expires_in: number;
    refresh_expires_in: number;
    refresh_token: string;
    token_type: string;
    not_before_policy: number;
    session_state: string;
    scope: string;
    id_token?: string;
}
export interface TokenResponse {
    accessToken: string;
    expiresIn: number;
    refreshExpiresIn: number;
    refreshToken: string;
    tokenType: string;
    notBeforePolicy: number;
    sessionState: string;
    scope: string;
    idToken?: string;
}
export declare const keycloakGetToken: (settings: Settings) => Promise<TokenResponse>;
export declare const keycloakLogout: (settings: Settings) => Promise<unknown>;
export declare const keycloakAdminClient: (credentials: Credentials) => Promise<KeycloakAdminClient>;
