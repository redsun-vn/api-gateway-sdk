"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportContracts = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function exportContracts(connection, query, labels) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...exportContracts.METADATA,
        template: exportContracts.METADATA.path,
        path: exportContracts.path(query),
    }, labels);
}
exports.exportContracts = exportContracts;
(function (exportContracts) {
    exportContracts.METADATA = {
        method: "POST",
        path: "/shop/hr/contracts/export",
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
    exportContracts.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr/contracts/export";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(exportContracts || (exports.exportContracts = exportContracts = {}));
//# sourceMappingURL=index.js.map