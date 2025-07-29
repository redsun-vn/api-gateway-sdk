"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefault = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function setDefault(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...setDefault.METADATA,
        template: setDefault.METADATA.path,
        path: setDefault.path(),
    }, data);
}
exports.setDefault = setDefault;
(function (setDefault) {
    setDefault.METADATA = {
        method: "POST",
        path: "/admin/crm/lead-scoring-configs/set-default-config",
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
    setDefault.path = () => "/admin/crm/lead-scoring-configs/set-default-config";
})(setDefault || (exports.setDefault = setDefault = {}));
//# sourceMappingURL=index.js.map