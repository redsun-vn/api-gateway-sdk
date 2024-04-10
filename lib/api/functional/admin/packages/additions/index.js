"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAdditions = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createAdditions(connection, data, id) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...(connection.headers ?? {}),
            "Content-Type": "application/json",
        },
    }, {
        ...createAdditions.METADATA,
        path: createAdditions.path(id),
    }, data);
}
exports.createAdditions = createAdditions;
(function (createAdditions) {
    createAdditions.METADATA = {
        method: "POST",
        path: "/admin/packages/:id/additions",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    createAdditions.path = (id) => {
        return `/admin/packages/${encodeURIComponent(id ?? "null")}/additions`;
    };
})(createAdditions || (exports.createAdditions = createAdditions = {}));
//# sourceMappingURL=index.js.map