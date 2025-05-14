"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRealm = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createRealm(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createRealm.METADATA,
        template: createRealm.METADATA.path,
        path: createRealm.path(),
    }, data);
}
exports.createRealm = createRealm;
(function (createRealm) {
    createRealm.METADATA = {
        method: "POST",
        path: "/shop/cms/websites/create-realm",
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
    createRealm.path = () => "/shop/cms/websites/create-realm";
})(createRealm || (exports.createRealm = createRealm = {}));
//# sourceMappingURL=index.js.map