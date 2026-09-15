"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkIdentifier = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function checkIdentifier(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...checkIdentifier.METADATA,
        template: checkIdentifier.METADATA.path,
        path: checkIdentifier.path(),
    }, input);
}
exports.checkIdentifier = checkIdentifier;
(function (checkIdentifier) {
    checkIdentifier.METADATA = {
        method: "POST",
        path: "/shop/staffs/check-identifier",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    checkIdentifier.path = () => "/shop/staffs/check-identifier";
})(checkIdentifier || (exports.checkIdentifier = checkIdentifier = {}));
//# sourceMappingURL=index.js.map