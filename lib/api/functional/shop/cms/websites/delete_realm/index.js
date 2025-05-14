"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteRealm = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function deleteRealm(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...deleteRealm.METADATA,
        template: deleteRealm.METADATA.path,
        path: deleteRealm.path(),
    }, data);
}
exports.deleteRealm = deleteRealm;
(function (deleteRealm) {
    deleteRealm.METADATA = {
        method: "POST",
        path: "/shop/cms/websites/delete-realm",
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
    deleteRealm.path = () => "/shop/cms/websites/delete-realm";
})(deleteRealm || (exports.deleteRealm = deleteRealm = {}));
//# sourceMappingURL=index.js.map