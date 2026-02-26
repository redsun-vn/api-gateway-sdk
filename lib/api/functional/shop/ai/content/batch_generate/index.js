"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchGenerate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function batchGenerate(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...batchGenerate.METADATA,
        template: batchGenerate.METADATA.path,
        path: batchGenerate.path(),
    }, data);
}
exports.batchGenerate = batchGenerate;
(function (batchGenerate) {
    batchGenerate.METADATA = {
        method: "POST",
        path: "/shop/ai/content/batch-generate",
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
    batchGenerate.path = () => "/shop/ai/content/batch-generate";
})(batchGenerate || (exports.batchGenerate = batchGenerate = {}));
//# sourceMappingURL=index.js.map