"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMemberLevelReport = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getMemberLevelReport(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getMemberLevelReport.METADATA,
        template: getMemberLevelReport.METADATA.path,
        path: getMemberLevelReport.path(query),
    });
}
exports.getMemberLevelReport = getMemberLevelReport;
(function (getMemberLevelReport) {
    getMemberLevelReport.METADATA = {
        method: "GET",
        path: "/shop/reports/loyalty-member-level",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getMemberLevelReport.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/reports/loyalty-member-level";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getMemberLevelReport || (exports.getMemberLevelReport = getMemberLevelReport = {}));
//# sourceMappingURL=index.js.map