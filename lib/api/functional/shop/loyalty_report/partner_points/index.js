"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPartnerPoints = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getPartnerPoints(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getPartnerPoints.METADATA,
        template: getPartnerPoints.METADATA.path,
        path: getPartnerPoints.path(query),
    });
}
exports.getPartnerPoints = getPartnerPoints;
(function (getPartnerPoints) {
    getPartnerPoints.METADATA = {
        method: "GET",
        path: "/shop/loyalty-report/partner-points",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getPartnerPoints.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/loyalty-report/partner-points";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getPartnerPoints || (exports.getPartnerPoints = getPartnerPoints = {}));
//# sourceMappingURL=index.js.map