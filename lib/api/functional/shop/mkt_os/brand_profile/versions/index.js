"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveVersion = exports.listVersions = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listVersions(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listVersions.METADATA,
        template: listVersions.METADATA.path,
        path: listVersions.path(query),
    });
}
exports.listVersions = listVersions;
(function (listVersions) {
    listVersions.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/brand-profile/versions",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listVersions.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/brand-profile/versions";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listVersions || (exports.listVersions = listVersions = {}));
async function saveVersion(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...saveVersion.METADATA,
        template: saveVersion.METADATA.path,
        path: saveVersion.path(),
    }, body);
}
exports.saveVersion = saveVersion;
(function (saveVersion) {
    saveVersion.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/brand-profile/versions",
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
    saveVersion.path = () => "/shop/mkt-os/brand-profile/versions";
})(saveVersion || (exports.saveVersion = saveVersion = {}));
//# sourceMappingURL=index.js.map