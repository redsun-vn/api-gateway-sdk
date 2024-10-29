"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOne = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOne(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOne.METADATA,
        template: findOne.METADATA.path,
        path: findOne.path(id),
    });
}
exports.findOne = findOne;
(function (findOne) {
    findOne.METADATA = {
        method: "GET",
        path: "/debts/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (id) => `/debts/${encodeURIComponent(id?.toString() ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
//# sourceMappingURL=index.js.map