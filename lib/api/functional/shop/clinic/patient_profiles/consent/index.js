"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signConsent = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function signConsent(connection, partnerId, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...signConsent.METADATA,
        template: signConsent.METADATA.path,
        path: signConsent.path(partnerId),
    }, dto);
}
exports.signConsent = signConsent;
(function (signConsent) {
    signConsent.METADATA = {
        method: "POST",
        path: "/shop/clinic/patient-profiles/:partnerId/consent",
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
    signConsent.path = (partnerId) => `/shop/clinic/patient-profiles/${encodeURIComponent(partnerId?.toString() ?? "null")}/consent`;
})(signConsent || (exports.signConsent = signConsent = {}));
//# sourceMappingURL=index.js.map