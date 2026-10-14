"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendToPartner = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendToPartner(connection, id, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...sendToPartner.METADATA,
        template: sendToPartner.METADATA.path,
        path: sendToPartner.path(id, query),
    });
}
exports.sendToPartner = sendToPartner;
(function (sendToPartner) {
    sendToPartner.METADATA = {
        method: "POST",
        path: "/shop/sale-orders/:id/send-to-partner",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    sendToPartner.path = (id, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/sale-orders/${encodeURIComponent(id?.toString() ?? "null")}/send-to-partner`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(sendToPartner || (exports.sendToPartner = sendToPartner = {}));
//# sourceMappingURL=index.js.map