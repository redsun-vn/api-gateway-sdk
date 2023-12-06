"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$delete = exports.update = exports.create = exports.confirm = exports.verify = exports.findOne = exports.findAll = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAll(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAll.METADATA,
        path: findAll.path(query),
    });
}
exports.findAll = findAll;
(function (findAll) {
    findAll.METADATA = {
        method: "GET",
        path: "/shop/order/draf-orders",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findAll.path = (query) => {
        const variables = query;
        const search = new URLSearchParams();
        for (const [key, value] of Object.entries(variables))
            if (value === undefined)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => search.append(key, String(elem)));
            else
                search.set(key, String(value));
        const encoded = search.toString();
        return `/shop/order/draf-orders${encoded.length ? `?${encoded}` : ""}`;
        ;
    };
})(findAll || (exports.findAll = findAll = {}));
async function findOne(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOne.METADATA,
        path: findOne.path(id),
    });
}
exports.findOne = findOne;
(function (findOne) {
    findOne.METADATA = {
        method: "GET",
        path: "/shop/order/draf-orders/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findOne.path = (id) => {
        return `/shop/order/draf-orders/${encodeURIComponent(id ?? "null")}`;
    };
})(findOne || (exports.findOne = findOne = {}));
async function verify(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...verify.METADATA,
        path: verify.path(id),
    });
}
exports.verify = verify;
(function (verify) {
    verify.METADATA = {
        method: "PUT",
        path: "/shop/order/draf-orders/:id/verify",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    verify.path = (id) => {
        return `/shop/order/draf-orders/${encodeURIComponent(id ?? "null")}/verify`;
    };
})(verify || (exports.verify = verify = {}));
async function confirm(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...confirm.METADATA,
        path: confirm.path(id),
    });
}
exports.confirm = confirm;
(function (confirm) {
    confirm.METADATA = {
        method: "PUT",
        path: "/shop/order/draf-orders/:id/confirm",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    confirm.path = (id) => {
        return `/shop/order/draf-orders/${encodeURIComponent(id ?? "null")}/confirm`;
    };
})(confirm || (exports.confirm = confirm = {}));
async function create(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...(connection.headers ?? {}),
            "Content-Type": "application/json",
        },
    }, {
        ...create.METADATA,
        path: create.path(),
    }, input);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/order/draf-orders",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    create.path = () => {
        return `/shop/order/draf-orders`;
    };
})(create || (exports.create = create = {}));
async function update(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...(connection.headers ?? {}),
            "Content-Type": "application/json",
        },
    }, {
        ...update.METADATA,
        path: update.path(id),
    }, input);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/shop/order/draf-orders/:id",
        request: {
            type: "application/json",
            encrypted: false
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    update.path = (id) => {
        return `/shop/order/draf-orders/${encodeURIComponent(id ?? "null")}`;
    };
})(update || (exports.update = update = {}));
async function $delete(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...$delete.METADATA,
        path: $delete.path(id),
    });
}
exports.$delete = $delete;
(function ($delete) {
    $delete.METADATA = {
        method: "DELETE",
        path: "/shop/order/draf-orders/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    $delete.path = (id) => {
        return `/shop/order/draf-orders/${encodeURIComponent(id ?? "null")}`;
    };
})($delete || (exports.$delete = $delete = {}));
//# sourceMappingURL=index.js.map