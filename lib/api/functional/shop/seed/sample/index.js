"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateSample = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function generateSample(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...generateSample.METADATA,
        template: generateSample.METADATA.path,
        path: generateSample.path(),
    }, data);
}
exports.generateSample = generateSample;
(function (generateSample) {
    generateSample.METADATA = {
        method: "POST",
        path: "/shop/seed/sample",
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
    generateSample.path = () => "/shop/seed/sample";
})(generateSample || (exports.generateSample = generateSample = {}));
//# sourceMappingURL=index.js.map