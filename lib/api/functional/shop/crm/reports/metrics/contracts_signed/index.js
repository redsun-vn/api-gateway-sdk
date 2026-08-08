"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.contractsSigned = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function contractsSigned(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...contractsSigned.METADATA,
        template: contractsSigned.METADATA.path,
        path: contractsSigned.path(query),
    });
}
exports.contractsSigned = contractsSigned;
(function (contractsSigned) {
    contractsSigned.METADATA = {
        method: "GET",
        path: "/shop/crm/reports/metrics/contracts-signed",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    contractsSigned.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/reports/metrics/contracts-signed";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(contractsSigned || (exports.contractsSigned = contractsSigned = {}));
//# sourceMappingURL=index.js.map