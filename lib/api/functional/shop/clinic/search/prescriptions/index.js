"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPrescriptions = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function searchPrescriptions(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...searchPrescriptions.METADATA,
        template: searchPrescriptions.METADATA.path,
        path: searchPrescriptions.path(query),
    });
}
exports.searchPrescriptions = searchPrescriptions;
(function (searchPrescriptions) {
    searchPrescriptions.METADATA = {
        method: "GET",
        path: "/shop/clinic/search/prescriptions",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    searchPrescriptions.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/clinic/search/prescriptions";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(searchPrescriptions || (exports.searchPrescriptions = searchPrescriptions = {}));
//# sourceMappingURL=index.js.map