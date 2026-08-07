"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listTemplates = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listTemplates(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listTemplates.METADATA,
        template: listTemplates.METADATA.path,
        path: listTemplates.path(),
    });
}
exports.listTemplates = listTemplates;
(function (listTemplates) {
    listTemplates.METADATA = {
        method: "GET",
        path: "/shop/sms/templates",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listTemplates.path = () => "/shop/sms/templates";
})(listTemplates || (exports.listTemplates = listTemplates = {}));
//# sourceMappingURL=index.js.map