"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerTemporary = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function registerTemporary(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...registerTemporary.METADATA,
        template: registerTemporary.METADATA.path,
        path: registerTemporary.path(),
    }, input);
}
exports.registerTemporary = registerTemporary;
(function (registerTemporary) {
    registerTemporary.METADATA = {
        method: "POST",
        path: "/auth/register-temporary",
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
    registerTemporary.path = () => "/auth/register-temporary";
})(registerTemporary || (exports.registerTemporary = registerTemporary = {}));
//# sourceMappingURL=index.js.map