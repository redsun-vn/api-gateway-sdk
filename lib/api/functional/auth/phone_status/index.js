"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.phoneStatus = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function phoneStatus(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...phoneStatus.METADATA,
        template: phoneStatus.METADATA.path,
        path: phoneStatus.path(),
    }, input);
}
exports.phoneStatus = phoneStatus;
(function (phoneStatus) {
    phoneStatus.METADATA = {
        method: "POST",
        path: "/auth/phone-status",
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
    phoneStatus.path = () => "/auth/phone-status";
})(phoneStatus || (exports.phoneStatus = phoneStatus = {}));
//# sourceMappingURL=index.js.map