"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRegisterV2 = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createRegisterV2(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createRegisterV2.METADATA,
        template: createRegisterV2.METADATA.path,
        path: createRegisterV2.path(),
    }, data);
}
exports.createRegisterV2 = createRegisterV2;
(function (createRegisterV2) {
    createRegisterV2.METADATA = {
        method: "POST",
        path: "/shops/register-v2",
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
    createRegisterV2.path = () => "/shops/register-v2";
})(createRegisterV2 || (exports.createRegisterV2 = createRegisterV2 = {}));
//# sourceMappingURL=index.js.map