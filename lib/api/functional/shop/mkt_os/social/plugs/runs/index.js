"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listPlugRuns = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listPlugRuns(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listPlugRuns.METADATA,
        template: listPlugRuns.METADATA.path,
        path: listPlugRuns.path(query),
    });
}
exports.listPlugRuns = listPlugRuns;
(function (listPlugRuns) {
    listPlugRuns.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/plugs/runs",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listPlugRuns.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/social/plugs/runs";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listPlugRuns || (exports.listPlugRuns = listPlugRuns = {}));
//# sourceMappingURL=index.js.map