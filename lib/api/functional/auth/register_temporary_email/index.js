"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerTemporaryEmail = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function registerTemporaryEmail(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...registerTemporaryEmail.METADATA,
        template: registerTemporaryEmail.METADATA.path,
        path: registerTemporaryEmail.path(),
    }, input);
}
exports.registerTemporaryEmail = registerTemporaryEmail;
(function (registerTemporaryEmail) {
    registerTemporaryEmail.METADATA = {
        method: "POST",
        path: "/auth/register-temporary-email",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    registerTemporaryEmail.path = () => "/auth/register-temporary-email";
})(registerTemporaryEmail || (exports.registerTemporaryEmail = registerTemporaryEmail = {}));
//# sourceMappingURL=index.js.map