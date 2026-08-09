"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runAdhoc = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function runAdhoc(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...runAdhoc.METADATA,
        template: runAdhoc.METADATA.path,
        path: runAdhoc.path(),
    }, body);
}
exports.runAdhoc = runAdhoc;
(function (runAdhoc) {
    runAdhoc.METADATA = {
        method: "POST",
        path: "/shop/crm/reports/run",
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
    runAdhoc.path = () => "/shop/crm/reports/run";
})(runAdhoc || (exports.runAdhoc = runAdhoc = {}));
//# sourceMappingURL=index.js.map