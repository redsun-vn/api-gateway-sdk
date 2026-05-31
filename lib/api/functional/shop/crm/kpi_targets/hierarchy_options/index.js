"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hierarchyOptions = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function hierarchyOptions(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...hierarchyOptions.METADATA,
        template: hierarchyOptions.METADATA.path,
        path: hierarchyOptions.path(),
    });
}
exports.hierarchyOptions = hierarchyOptions;
(function (hierarchyOptions) {
    hierarchyOptions.METADATA = {
        method: "GET",
        path: "/shop/crm/kpi-targets/hierarchy-options",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    hierarchyOptions.path = () => "/shop/crm/kpi-targets/hierarchy-options";
})(hierarchyOptions || (exports.hierarchyOptions = hierarchyOptions = {}));
//# sourceMappingURL=index.js.map