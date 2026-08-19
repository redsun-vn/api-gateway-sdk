"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listRegisteredVariables = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listRegisteredVariables(connection, modelKey) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listRegisteredVariables.METADATA,
        template: listRegisteredVariables.METADATA.path,
        path: listRegisteredVariables.path(modelKey),
    });
}
exports.listRegisteredVariables = listRegisteredVariables;
(function (listRegisteredVariables) {
    listRegisteredVariables.METADATA = {
        method: "GET",
        path: "/admin/email/actions/variables/:model_key",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listRegisteredVariables.path = (modelKey) => `/admin/email/actions/variables/${encodeURIComponent(modelKey?.toString() ?? "null")}`;
})(listRegisteredVariables || (exports.listRegisteredVariables = listRegisteredVariables = {}));
//# sourceMappingURL=index.js.map