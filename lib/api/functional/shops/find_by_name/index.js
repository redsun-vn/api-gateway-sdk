"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneByName = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOneByName(connection, name) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneByName.METADATA,
        path: findOneByName.path(name),
    });
}
exports.findOneByName = findOneByName;
(function (findOneByName) {
    findOneByName.METADATA = {
        method: "GET",
        path: "/shops/find-by-name/:name",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findOneByName.path = (name) => {
        return `/shops/find-by-name/${encodeURIComponent(name ?? "null")}`;
    };
})(findOneByName || (exports.findOneByName = findOneByName = {}));
//# sourceMappingURL=index.js.map