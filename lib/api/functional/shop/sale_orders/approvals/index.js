"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.approvalInbox = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function approvalInbox(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...approvalInbox.METADATA,
        template: approvalInbox.METADATA.path,
        path: approvalInbox.path(query),
    });
}
exports.approvalInbox = approvalInbox;
(function (approvalInbox) {
    approvalInbox.METADATA = {
        method: "GET",
        path: "/shop/sale-orders/approvals",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    approvalInbox.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/sale-orders/approvals";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(approvalInbox || (exports.approvalInbox = approvalInbox = {}));
//# sourceMappingURL=index.js.map