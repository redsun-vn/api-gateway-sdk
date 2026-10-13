"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createActivity = exports.listActivities = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listActivities(connection, id, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listActivities.METADATA,
        template: listActivities.METADATA.path,
        path: listActivities.path(id, query),
    });
}
exports.listActivities = listActivities;
(function (listActivities) {
    listActivities.METADATA = {
        method: "GET",
        path: "/shop/sale-orders/:id/activities",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listActivities.path = (id, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/sale-orders/${encodeURIComponent(id?.toString() ?? "null")}/activities`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listActivities || (exports.listActivities = listActivities = {}));
async function createActivity(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createActivity.METADATA,
        template: createActivity.METADATA.path,
        path: createActivity.path(id),
    }, body);
}
exports.createActivity = createActivity;
(function (createActivity) {
    createActivity.METADATA = {
        method: "POST",
        path: "/shop/sale-orders/:id/activities",
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
    createActivity.path = (id) => `/shop/sale-orders/${encodeURIComponent(id?.toString() ?? "null")}/activities`;
})(createActivity || (exports.createActivity = createActivity = {}));
//# sourceMappingURL=index.js.map