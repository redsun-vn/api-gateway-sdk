"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.softphoneStatus = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function softphoneStatus(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...softphoneStatus.METADATA,
        template: softphoneStatus.METADATA.path,
        path: softphoneStatus.path(),
    });
}
exports.softphoneStatus = softphoneStatus;
(function (softphoneStatus) {
    softphoneStatus.METADATA = {
        method: "GET",
        path: "/shop/crm/calls/softphone/status",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    softphoneStatus.path = () => "/shop/crm/calls/softphone/status";
})(softphoneStatus || (exports.softphoneStatus = softphoneStatus = {}));
//# sourceMappingURL=index.js.map