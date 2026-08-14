"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportStaffs = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function exportStaffs(connection, query, labels) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...exportStaffs.METADATA,
        template: exportStaffs.METADATA.path,
        path: exportStaffs.path(query),
    }, labels);
}
exports.exportStaffs = exportStaffs;
(function (exportStaffs) {
    exportStaffs.METADATA = {
        method: "POST",
        path: "/shop/staffs/export",
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
    exportStaffs.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/staffs/export";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(exportStaffs || (exports.exportStaffs = exportStaffs = {}));
//# sourceMappingURL=index.js.map