"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.searchPatientProfiles = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function searchPatientProfiles(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...searchPatientProfiles.METADATA,
        template: searchPatientProfiles.METADATA.path,
        path: searchPatientProfiles.path(query),
    });
}
exports.searchPatientProfiles = searchPatientProfiles;
(function (searchPatientProfiles) {
    searchPatientProfiles.METADATA = {
        method: "GET",
        path: "/shop/clinic/search/patient-profiles",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    searchPatientProfiles.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/clinic/search/patient-profiles";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(searchPatientProfiles || (exports.searchPatientProfiles = searchPatientProfiles = {}));
//# sourceMappingURL=index.js.map