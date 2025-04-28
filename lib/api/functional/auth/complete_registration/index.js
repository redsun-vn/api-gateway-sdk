"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeRegistration = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function completeRegistration(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...completeRegistration.METADATA,
        template: completeRegistration.METADATA.path,
        path: completeRegistration.path(),
    }, input);
}
exports.completeRegistration = completeRegistration;
(function (completeRegistration) {
    completeRegistration.METADATA = {
        method: "POST",
        path: "/auth/complete-registration",
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
    completeRegistration.path = () => "/auth/complete-registration";
})(completeRegistration || (exports.completeRegistration = completeRegistration = {}));
//# sourceMappingURL=index.js.map