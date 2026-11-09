"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.test = exports.remove = exports.update = exports.deliveries = exports.create = exports.list = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function list(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...list.METADATA,
        template: list.METADATA.path,
        path: list.path(),
    });
}
exports.list = list;
(function (list) {
    list.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/webhooks",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    list.path = () => "/shop/mkt-os/social/webhooks";
})(list || (exports.list = list = {}));
async function create(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...create.METADATA,
        template: create.METADATA.path,
        path: create.path(),
    }, body);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/webhooks",
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
    create.path = () => "/shop/mkt-os/social/webhooks";
})(create || (exports.create = create = {}));
async function deliveries(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deliveries.METADATA,
        template: deliveries.METADATA.path,
        path: deliveries.path(query),
    });
}
exports.deliveries = deliveries;
(function (deliveries) {
    deliveries.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/webhooks/deliveries",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deliveries.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/social/webhooks/deliveries";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(deliveries || (exports.deliveries = deliveries = {}));
async function update(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...update.METADATA,
        template: update.METADATA.path,
        path: update.path(id),
    }, body);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/social/webhooks/:id",
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
    update.path = (id) => `/shop/mkt-os/social/webhooks/${encodeURIComponent(id?.toString() ?? "null")}`;
})(update || (exports.update = update = {}));
async function remove(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...remove.METADATA,
        template: remove.METADATA.path,
        path: remove.path(id),
    });
}
exports.remove = remove;
(function (remove) {
    remove.METADATA = {
        method: "DELETE",
        path: "/shop/mkt-os/social/webhooks/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    remove.path = (id) => `/shop/mkt-os/social/webhooks/${encodeURIComponent(id?.toString() ?? "null")}`;
})(remove || (exports.remove = remove = {}));
async function test(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...test.METADATA,
        template: test.METADATA.path,
        path: test.path(id),
    });
}
exports.test = test;
(function (test) {
    test.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/webhooks/:id/test",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    test.path = (id) => `/shop/mkt-os/social/webhooks/${encodeURIComponent(id?.toString() ?? "null")}/test`;
})(test || (exports.test = test = {}));
//# sourceMappingURL=index.js.map