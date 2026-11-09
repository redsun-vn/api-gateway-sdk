"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.applySet = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function applySet(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...applySet.METADATA,
        template: applySet.METADATA.path,
        path: applySet.path(id),
    });
}
exports.applySet = applySet;
(function (applySet) {
    applySet.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/sets/:id/apply",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    applySet.path = (id) => `/shop/mkt-os/social/sets/${encodeURIComponent(id?.toString() ?? "null")}/apply`;
})(applySet || (exports.applySet = applySet = {}));
//# sourceMappingURL=index.js.map