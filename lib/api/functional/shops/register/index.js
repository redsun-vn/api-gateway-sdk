"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createRegister = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createRegister(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createRegister.METADATA,
        template: createRegister.METADATA.path,
        path: createRegister.path(),
    }, data);
}
exports.createRegister = createRegister;
(function (createRegister) {
    createRegister.METADATA = {
        method: "POST",
        path: "/shops/register",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    createRegister.path = () => "/shops/register";
})(createRegister || (exports.createRegister = createRegister = {}));
//# sourceMappingURL=index.js.map