"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectTargets = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function selectTargets(connection, grantId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...selectTargets.METADATA,
        template: selectTargets.METADATA.path,
        path: selectTargets.path(grantId),
    }, body);
}
exports.selectTargets = selectTargets;
(function (selectTargets) {
    selectTargets.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/channels/grants/:grantId/targets/select",
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
    selectTargets.path = (grantId) => `/shop/mkt-os/social/channels/grants/${encodeURIComponent(grantId?.toString() ?? "null")}/targets/select`;
})(selectTargets || (exports.selectTargets = selectTargets = {}));
//# sourceMappingURL=index.js.map