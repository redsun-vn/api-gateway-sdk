"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.upsertApprovalConfig = exports.getApprovalConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getApprovalConfig(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getApprovalConfig.METADATA,
        template: getApprovalConfig.METADATA.path,
        path: getApprovalConfig.path(),
    });
}
exports.getApprovalConfig = getApprovalConfig;
(function (getApprovalConfig) {
    getApprovalConfig.METADATA = {
        method: "GET",
        path: "/shop/sale-orders/approval-config",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getApprovalConfig.path = () => "/shop/sale-orders/approval-config";
})(getApprovalConfig || (exports.getApprovalConfig = getApprovalConfig = {}));
async function upsertApprovalConfig(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...upsertApprovalConfig.METADATA,
        template: upsertApprovalConfig.METADATA.path,
        path: upsertApprovalConfig.path(),
    }, body);
}
exports.upsertApprovalConfig = upsertApprovalConfig;
(function (upsertApprovalConfig) {
    upsertApprovalConfig.METADATA = {
        method: "PUT",
        path: "/shop/sale-orders/approval-config",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    upsertApprovalConfig.path = () => "/shop/sale-orders/approval-config";
})(upsertApprovalConfig || (exports.upsertApprovalConfig = upsertApprovalConfig = {}));
//# sourceMappingURL=index.js.map