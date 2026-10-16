"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setHighlightOrder = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function setHighlightOrder(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...setHighlightOrder.METADATA,
        template: setHighlightOrder.METADATA.path,
        path: setHighlightOrder.path(),
    }, data);
}
exports.setHighlightOrder = setHighlightOrder;
(function (setHighlightOrder) {
    setHighlightOrder.METADATA = {
        method: "PUT",
        path: "/shop/cms/posts/highlights/order",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    setHighlightOrder.path = () => "/shop/cms/posts/highlights/order";
})(setHighlightOrder || (exports.setHighlightOrder = setHighlightOrder = {}));
//# sourceMappingURL=index.js.map