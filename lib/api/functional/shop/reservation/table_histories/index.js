"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTimeline = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getTimeline(connection, tableId, filter) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getTimeline.METADATA,
        template: getTimeline.METADATA.path,
        path: getTimeline.path(tableId, filter),
    });
}
exports.getTimeline = getTimeline;
(function (getTimeline) {
    getTimeline.METADATA = {
        method: "GET",
        path: "/shop/reservation/table_histories/:tableId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getTimeline.path = (tableId, filter) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(filter))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/reservation/table_histories/${encodeURIComponent(tableId?.toString() ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getTimeline || (exports.getTimeline = getTimeline = {}));
//# sourceMappingURL=index.js.map