"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeRegistrationV2 = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function completeRegistrationV2(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...completeRegistrationV2.METADATA,
        template: completeRegistrationV2.METADATA.path,
        path: completeRegistrationV2.path(),
    }, input);
}
exports.completeRegistrationV2 = completeRegistrationV2;
(function (completeRegistrationV2) {
    completeRegistrationV2.METADATA = {
        method: "POST",
        path: "/auth/complete-registration-v2",
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
    completeRegistrationV2.path = () => "/auth/complete-registration-v2";
})(completeRegistrationV2 || (exports.completeRegistrationV2 = completeRegistrationV2 = {}));
//# sourceMappingURL=index.js.map