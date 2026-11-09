"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPreview = exports.startPreview = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function startPreview(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...startPreview.METADATA,
        template: startPreview.METADATA.path,
        path: startPreview.path(),
    }, body);
}
exports.startPreview = startPreview;
(function (startPreview) {
    startPreview.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/audiences/preview",
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
    startPreview.path = () => "/shop/mkt-os/audiences/preview";
})(startPreview || (exports.startPreview = startPreview = {}));
async function getPreview(connection, jobId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPreview.METADATA,
        template: getPreview.METADATA.path,
        path: getPreview.path(jobId),
    });
}
exports.getPreview = getPreview;
(function (getPreview) {
    getPreview.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/audiences/preview/:jobId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPreview.path = (jobId) => `/shop/mkt-os/audiences/preview/${encodeURIComponent(jobId?.toString() ?? "null")}`;
})(getPreview || (exports.getPreview = getPreview = {}));
//# sourceMappingURL=index.js.map