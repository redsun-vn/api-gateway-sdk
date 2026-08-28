"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sweep = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sweep(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...sweep.METADATA,
        template: sweep.METADATA.path,
        path: sweep.path(),
    }, body);
}
exports.sweep = sweep;
(function (sweep) {
    sweep.METADATA = {
        method: "POST",
        path: "/shop/hr/salary/leave-accrual/sweep",
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
    sweep.path = () => "/shop/hr/salary/leave-accrual/sweep";
})(sweep || (exports.sweep = sweep = {}));
//# sourceMappingURL=index.js.map