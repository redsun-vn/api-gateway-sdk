"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.completeRegistrationEmailV2 = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function completeRegistrationEmailV2(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...completeRegistrationEmailV2.METADATA,
        template: completeRegistrationEmailV2.METADATA.path,
        path: completeRegistrationEmailV2.path(),
    }, input);
}
exports.completeRegistrationEmailV2 = completeRegistrationEmailV2;
(function (completeRegistrationEmailV2) {
    completeRegistrationEmailV2.METADATA = {
        method: "POST",
        path: "/auth/complete-registration-email-v2",
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
    completeRegistrationEmailV2.path = () => "/auth/complete-registration-email-v2";
})(completeRegistrationEmailV2 || (exports.completeRegistrationEmailV2 = completeRegistrationEmailV2 = {}));
//# sourceMappingURL=index.js.map