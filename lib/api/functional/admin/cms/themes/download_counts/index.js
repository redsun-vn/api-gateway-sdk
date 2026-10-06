"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.downloadCounts = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function downloadCounts(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...downloadCounts.METADATA,
        template: downloadCounts.METADATA.path,
        path: downloadCounts.path(query),
    });
}
exports.downloadCounts = downloadCounts;
(function (downloadCounts) {
    downloadCounts.METADATA = {
        method: "GET",
        path: "/admin/cms/themes/download-counts",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    downloadCounts.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/cms/themes/download-counts";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(downloadCounts || (exports.downloadCounts = downloadCounts = {}));
//# sourceMappingURL=index.js.map