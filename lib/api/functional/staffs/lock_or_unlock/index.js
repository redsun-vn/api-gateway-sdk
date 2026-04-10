"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lockOrUnlock = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function lockOrUnlock(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...lockOrUnlock.METADATA,
        template: lockOrUnlock.METADATA.path,
        path: lockOrUnlock.path(),
    }, input);
}
exports.lockOrUnlock = lockOrUnlock;
(function (lockOrUnlock) {
    lockOrUnlock.METADATA = {
        method: "POST",
        path: "/staffs/lock-or-unlock",
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
    lockOrUnlock.path = () => "/staffs/lock-or-unlock";
})(lockOrUnlock || (exports.lockOrUnlock = lockOrUnlock = {}));
//# sourceMappingURL=index.js.map