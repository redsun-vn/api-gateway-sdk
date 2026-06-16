"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.check = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function check(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...check.METADATA,
        template: check.METADATA.path,
        path: check.path(),
    });
}
exports.check = check;
(function (check) {
    check.METADATA = {
        method: "GET",
        path: "/crm/health",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    check.path = () => "/crm/health";
})(check || (exports.check = check = {}));
//# sourceMappingURL=index.js.map