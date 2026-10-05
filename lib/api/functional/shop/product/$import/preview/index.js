"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.previewPage = exports.preview = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function preview(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...preview.METADATA,
        template: preview.METADATA.path,
        path: preview.path(),
    });
}
exports.preview = preview;
(function (preview) {
    preview.METADATA = {
        method: "POST",
        path: "/shop/product/import/preview",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    preview.path = () => "/shop/product/import/preview";
})(preview || (exports.preview = preview = {}));
async function previewPage(connection, importId, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...previewPage.METADATA,
        template: previewPage.METADATA.path,
        path: previewPage.path(importId, query),
    });
}
exports.previewPage = previewPage;
(function (previewPage) {
    previewPage.METADATA = {
        method: "GET",
        path: "/shop/product/import/:importId/preview",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    previewPage.path = (importId, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/product/import/${encodeURIComponent(importId?.toString() ?? "null")}/preview`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(previewPage || (exports.previewPage = previewPage = {}));
//# sourceMappingURL=index.js.map