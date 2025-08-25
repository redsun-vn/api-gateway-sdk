"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExportKpi = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getExportKpi(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getExportKpi.METADATA,
        template: getExportKpi.METADATA.path,
        path: getExportKpi.path(query),
    });
}
exports.getExportKpi = getExportKpi;
(function (getExportKpi) {
    getExportKpi.METADATA = {
        method: "GET",
        path: "/admin/crm-kpis-export",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getExportKpi.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/crm-kpis-export";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getExportKpi || (exports.getExportKpi = getExportKpi = {}));
//# sourceMappingURL=index.js.map