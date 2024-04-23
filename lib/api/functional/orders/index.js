"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOnePublic = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOnePublic(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOnePublic.METADATA,
        path: findOnePublic.path(id),
    });
}
exports.findOnePublic = findOnePublic;
(function (findOnePublic) {
    findOnePublic.METADATA = {
        method: "GET",
        path: "/orders/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findOnePublic.path = (id) => {
        return `/orders/${encodeURIComponent(id ?? "null")}`;
    };
})(findOnePublic || (exports.findOnePublic = findOnePublic = {}));
//# sourceMappingURL=index.js.map