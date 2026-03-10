"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSingleStatus = exports.getBatchStatus = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getBatchStatus(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getBatchStatus.METADATA,
        template: getBatchStatus.METADATA.path,
        path: getBatchStatus.path(query),
    });
}
exports.getBatchStatus = getBatchStatus;
(function (getBatchStatus) {
    getBatchStatus.METADATA = {
        method: "GET",
        path: "/shop/reservation/table_status",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getBatchStatus.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/reservation/table_status";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getBatchStatus || (exports.getBatchStatus = getBatchStatus = {}));
async function getSingleStatus(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getSingleStatus.METADATA,
        template: getSingleStatus.METADATA.path,
        path: getSingleStatus.path(id),
    });
}
exports.getSingleStatus = getSingleStatus;
(function (getSingleStatus) {
    getSingleStatus.METADATA = {
        method: "GET",
        path: "/shop/reservation/table_status/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getSingleStatus.path = (id) => `/shop/reservation/table_status/${encodeURIComponent(id?.toString() ?? "null")}`;
})(getSingleStatus || (exports.getSingleStatus = getSingleStatus = {}));
//# sourceMappingURL=index.js.map