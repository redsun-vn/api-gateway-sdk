"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createManual = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createManual(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createManual.METADATA,
        template: createManual.METADATA.path,
        path: createManual.path(),
    }, data);
}
exports.createManual = createManual;
(function (createManual) {
    createManual.METADATA = {
        method: "POST",
        path: "/shop/hr/salary/calculations/manual",
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
    createManual.path = () => "/shop/hr/salary/calculations/manual";
})(createManual || (exports.createManual = createManual = {}));
//# sourceMappingURL=index.js.map