"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExamples = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getExamples(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getExamples.METADATA,
        template: getExamples.METADATA.path,
        path: getExamples.path(),
    });
}
exports.getExamples = getExamples;
(function (getExamples) {
    getExamples.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/brand-profile/examples",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getExamples.path = () => "/shop/mkt-os/brand-profile/examples";
})(getExamples || (exports.getExamples = getExamples = {}));
//# sourceMappingURL=index.js.map