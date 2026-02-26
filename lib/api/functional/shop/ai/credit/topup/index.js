"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.topUp = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function topUp(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...topUp.METADATA,
        template: topUp.METADATA.path,
        path: topUp.path(),
    }, data);
}
exports.topUp = topUp;
(function (topUp) {
    topUp.METADATA = {
        method: "POST",
        path: "/shop/ai/credit/topup",
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
    topUp.path = () => "/shop/ai/credit/topup";
})(topUp || (exports.topUp = topUp = {}));
//# sourceMappingURL=index.js.map