export interface IKeycloakUser {
	exp?: number;
	iat?: number;
	jti?: string;
	iss?: string;
	aud?: unknown;
	sub: string;
	typ: string;
	azp?: string;
	session_state: string;
	acr?: string;
	'allowed-origins'?: unknown;
	realm_access?: unknown;
	resource_access?: unknown;
	scope?: string;
	sid?: string;
	email_verified?: boolean;
	preferred_username?: string;
	given_name?: string;
	family_name?: string;
}
