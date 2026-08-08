"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runView = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function runView(connection, id, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...runView.METADATA,
        template: runView.METADATA.path,
        path: runView.path(id, query),
    });
}
exports.runView = runView;
(function (runView) {
    runView.METADATA = {
        method: "GET",
        path: "/shop/crm/reports/views/:id/run",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    runView.path = (id, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/crm/reports/views/${encodeURIComponent(id?.toString() ?? "null")}/run`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(runView || (exports.runView = runView = {}));
//# sourceMappingURL=index.js.map