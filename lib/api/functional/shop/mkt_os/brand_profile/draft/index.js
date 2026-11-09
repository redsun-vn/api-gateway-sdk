"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteDraft = exports.saveDraft = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function saveDraft(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...saveDraft.METADATA,
        template: saveDraft.METADATA.path,
        path: saveDraft.path(),
    }, body);
}
exports.saveDraft = saveDraft;
(function (saveDraft) {
    saveDraft.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/brand-profile/draft",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    saveDraft.path = () => "/shop/mkt-os/brand-profile/draft";
})(saveDraft || (exports.saveDraft = saveDraft = {}));
async function deleteDraft(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteDraft.METADATA,
        template: deleteDraft.METADATA.path,
        path: deleteDraft.path(query),
    });
}
exports.deleteDraft = deleteDraft;
(function (deleteDraft) {
    deleteDraft.METADATA = {
        method: "DELETE",
        path: "/shop/mkt-os/brand-profile/draft",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteDraft.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/brand-profile/draft";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(deleteDraft || (exports.deleteDraft = deleteDraft = {}));
//# sourceMappingURL=index.js.map