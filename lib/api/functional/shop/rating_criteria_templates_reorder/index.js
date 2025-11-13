"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reorder = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function reorder(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...reorder.METADATA,
        template: reorder.METADATA.path,
        path: reorder.path(),
    }, data);
}
exports.reorder = reorder;
(function (reorder) {
    reorder.METADATA = {
        method: "POST",
        path: "/shop/rating-criteria-templates-reorder",
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
    reorder.path = () => "/shop/rating-criteria-templates-reorder";
})(reorder || (exports.reorder = reorder = {}));
//# sourceMappingURL=index.js.map