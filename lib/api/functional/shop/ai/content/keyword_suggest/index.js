"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.suggestKeywords = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function suggestKeywords(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...suggestKeywords.METADATA,
        template: suggestKeywords.METADATA.path,
        path: suggestKeywords.path(),
    }, data);
}
exports.suggestKeywords = suggestKeywords;
(function (suggestKeywords) {
    suggestKeywords.METADATA = {
        method: "POST",
        path: "/shop/ai/content/keyword-suggest",
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
    suggestKeywords.path = () => "/shop/ai/content/keyword-suggest";
})(suggestKeywords || (exports.suggestKeywords = suggestKeywords = {}));
//# sourceMappingURL=index.js.map