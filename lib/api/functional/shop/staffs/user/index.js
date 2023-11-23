"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneByUserId = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOneByUserId(connection, userId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneByUserId.METADATA,
        path: findOneByUserId.path(userId),
    });
}
exports.findOneByUserId = findOneByUserId;
(function (findOneByUserId) {
    findOneByUserId.METADATA = {
        method: "GET",
        path: "/shop/staffs/user/:userId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findOneByUserId.path = (userId) => {
        return `/shop/staffs/user/${encodeURIComponent(userId ?? "null")}`;
    };
})(findOneByUserId || (exports.findOneByUserId = findOneByUserId = {}));
//# sourceMappingURL=index.js.map