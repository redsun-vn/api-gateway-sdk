"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.keycloakAdminClient = exports.keycloakLogout = exports.keycloakGetToken = exports.defaultRealm = exports.defaultBaseUrl = void 0;
const _1 = require("./");
const keycloak_admin_client_1 = __importDefault(require("@keycloak/keycloak-admin-client"));
exports.defaultBaseUrl = process.env.KEYCLOAK_BASE_URL;
exports.defaultRealm = process.env.KEYCLOAK_REALM_NAME;
const bytesToBase64 = (bytes) => btoa(Array.from(bytes, (byte) => String.fromCodePoint(byte)).join(''));
const toBase64 = (input) => bytesToBase64(new TextEncoder().encode(input));
const encodeRFC3986URIComponent = (input) => encodeURIComponent(input).replace(/[!'()*]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);
const encodeFormURIComponent = (data) => encodeRFC3986URIComponent(data).replaceAll('%20', '+');
const keycloakGetToken = async (settings) => {
    const baseUrl = settings.baseUrl || exports.defaultBaseUrl;
    const realmName = settings.realmName || exports.defaultRealm;
    const url = `${baseUrl}/realms/${realmName}/protocol/openid-connect/token`;
    const credentials = settings.credentials || {};
    const payload = (0, _1.stringifyQueryParams)({
        username: credentials.username,
        password: credentials.password,
        grant_type: credentials.grantType,
        client_id: credentials.clientId,
        totp: credentials.totp,
        ...(credentials.offlineToken ? { scope: 'offline_access' } : {}),
        ...(credentials.scopes ? { scope: credentials.scopes.join(' ') } : {}),
        ...(credentials.refreshToken
            ? {
                refresh_token: credentials.refreshToken,
                client_secret: credentials.clientSecret,
            }
            : {}),
    });
    const options = settings.requestOptions ?? {};
    const headers = new Headers(options.headers);
    if (credentials.clientSecret) {
        const username = encodeFormURIComponent(credentials.clientId);
        const password = encodeFormURIComponent(credentials.clientSecret);
        headers.set('authorization', `Basic ${toBase64(`${username}:${password}`)}`);
    }
    headers.set('content-type', 'application/x-www-form-urlencoded');
    const response = await (0, _1.fetchWithError)(url, {
        ...options,
        method: 'POST',
        headers,
        body: payload,
    });
    const data = await response.json();
    return (0, _1.camelize)(data);
};
exports.keycloakGetToken = keycloakGetToken;
const keycloakLogout = async (settings) => {
    const baseUrl = settings.baseUrl || exports.defaultBaseUrl;
    const realmName = settings.realmName || exports.defaultRealm;
    const url = `${baseUrl}/realms/${realmName}/protocol/openid-connect/logout`;
    const credentials = settings.credentials || {};
    const payload = (0, _1.stringifyQueryParams)({
        client_id: credentials.clientId,
        ...(credentials.offlineToken ? { scope: 'offline_access' } : {}),
        ...(credentials.scopes ? { scope: credentials.scopes.join(' ') } : {}),
        ...(credentials.refreshToken
            ? {
                refresh_token: credentials.refreshToken,
                client_secret: credentials.clientSecret,
            }
            : {}),
    });
    const options = settings.requestOptions ?? {};
    const headers = new Headers(options.headers);
    if (credentials.clientSecret) {
        const username = encodeFormURIComponent(credentials.clientId);
        const password = encodeFormURIComponent(credentials.clientSecret);
        headers.set('authorization', `Basic ${toBase64(`${username}:${password}`)}`);
    }
    headers.set('content-type', 'application/x-www-form-urlencoded');
    return await (0, _1.fetchWithError)(url, {
        ...options,
        method: 'POST',
        headers,
        body: payload,
    });
};
exports.keycloakLogout = keycloakLogout;
const keycloakAdminClient = async function (credentials) {
    const kcAdminClient = new keycloak_admin_client_1.default({
        baseUrl: process.env.KEYCLOAK_BASE_URL,
        realmName: process.env.KEYCLOAK_REALM_NAME,
    });
    await kcAdminClient.auth({
        username: credentials.username,
        password: credentials.password,
        grantType: credentials.grantType,
        clientId: credentials.clientId,
        clientSecret: credentials.clientSecret,
    });
    return kcAdminClient;
};
exports.keycloakAdminClient = keycloakAdminClient;
//# sourceMappingURL=keycloak.auth.js.map