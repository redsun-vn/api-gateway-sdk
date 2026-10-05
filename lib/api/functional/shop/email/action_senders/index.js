"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setActionSender = exports.listActionSenders = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listActionSenders(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listActionSenders.METADATA,
        template: listActionSenders.METADATA.path,
        path: listActionSenders.path(),
    });
}
exports.listActionSenders = listActionSenders;
(function (listActionSenders) {
    listActionSenders.METADATA = {
        method: "GET",
        path: "/shop/email/action-senders",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listActionSenders.path = () => "/shop/email/action-senders";
})(listActionSenders || (exports.listActionSenders = listActionSenders = {}));
async function setActionSender(connection, modelKey, actionKey, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...setActionSender.METADATA,
        template: setActionSender.METADATA.path,
        path: setActionSender.path(modelKey, actionKey),
    }, dto);
}
exports.setActionSender = setActionSender;
(function (setActionSender) {
    setActionSender.METADATA = {
        method: "PUT",
        path: "/shop/email/action-senders/:model_key/:action_key",
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
    setActionSender.path = (modelKey, actionKey) => `/shop/email/action-senders/${encodeURIComponent(modelKey?.toString() ?? "null")}/${encodeURIComponent(actionKey?.toString() ?? "null")}`;
})(setActionSender || (exports.setActionSender = setActionSender = {}));
//# sourceMappingURL=index.js.map