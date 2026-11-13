"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteToneSet = exports.updateToneSet = exports.createToneSet = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createToneSet(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createToneSet.METADATA,
        template: createToneSet.METADATA.path,
        path: createToneSet.path(),
    }, body);
}
exports.createToneSet = createToneSet;
(function (createToneSet) {
    createToneSet.METADATA = {
        method: "POST",
        path: "/shop/ai/business-profile/tone-sets",
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
    createToneSet.path = () => "/shop/ai/business-profile/tone-sets";
})(createToneSet || (exports.createToneSet = createToneSet = {}));
async function updateToneSet(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateToneSet.METADATA,
        template: updateToneSet.METADATA.path,
        path: updateToneSet.path(id),
    }, body);
}
exports.updateToneSet = updateToneSet;
(function (updateToneSet) {
    updateToneSet.METADATA = {
        method: "PATCH",
        path: "/shop/ai/business-profile/tone-sets/:id",
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
    updateToneSet.path = (id) => `/shop/ai/business-profile/tone-sets/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateToneSet || (exports.updateToneSet = updateToneSet = {}));
async function deleteToneSet(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteToneSet.METADATA,
        template: deleteToneSet.METADATA.path,
        path: deleteToneSet.path(id),
    });
}
exports.deleteToneSet = deleteToneSet;
(function (deleteToneSet) {
    deleteToneSet.METADATA = {
        method: "DELETE",
        path: "/shop/ai/business-profile/tone-sets/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteToneSet.path = (id) => `/shop/ai/business-profile/tone-sets/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteToneSet || (exports.deleteToneSet = deleteToneSet = {}));
//# sourceMappingURL=index.js.map