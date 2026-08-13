"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$delete = exports.cancel = exports.execute = exports.reject = exports.approve = exports.submit = exports.update = exports.create = exports.findOne = exports.findAll = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAll(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAll.METADATA,
        template: findAll.METADATA.path,
        path: findAll.path(query),
    });
}
exports.findAll = findAll;
(function (findAll) {
    findAll.METADATA = {
        method: "GET",
        path: "/shop/inventory/stock-destroys",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAll.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/stock-destroys";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAll || (exports.findAll = findAll = {}));
async function findOne(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOne.METADATA,
        template: findOne.METADATA.path,
        path: findOne.path(id),
    });
}
exports.findOne = findOne;
(function (findOne) {
    findOne.METADATA = {
        method: "GET",
        path: "/shop/inventory/stock-destroys/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (id) => `/shop/inventory/stock-destroys/${encodeURIComponent(id?.toString() ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
async function create(connection, input) {
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
    }, input);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/inventory/stock-destroys",
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
    create.path = () => "/shop/inventory/stock-destroys";
})(create || (exports.create = create = {}));
async function update(connection, id, input) {
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
    }, input);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/shop/inventory/stock-destroys/:id",
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
    update.path = (id) => `/shop/inventory/stock-destroys/${encodeURIComponent(id?.toString() ?? "null")}`;
})(update || (exports.update = update = {}));
async function submit(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...submit.METADATA,
        template: submit.METADATA.path,
        path: submit.path(id),
    });
}
exports.submit = submit;
(function (submit) {
    submit.METADATA = {
        method: "POST",
        path: "/shop/inventory/stock-destroys/:id/submit",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    submit.path = (id) => `/shop/inventory/stock-destroys/${encodeURIComponent(id?.toString() ?? "null")}/submit`;
})(submit || (exports.submit = submit = {}));
async function approve(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...approve.METADATA,
        template: approve.METADATA.path,
        path: approve.path(id),
    });
}
exports.approve = approve;
(function (approve) {
    approve.METADATA = {
        method: "POST",
        path: "/shop/inventory/stock-destroys/:id/approve",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    approve.path = (id) => `/shop/inventory/stock-destroys/${encodeURIComponent(id?.toString() ?? "null")}/approve`;
})(approve || (exports.approve = approve = {}));
async function reject(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...reject.METADATA,
        template: reject.METADATA.path,
        path: reject.path(id),
    }, input);
}
exports.reject = reject;
(function (reject) {
    reject.METADATA = {
        method: "POST",
        path: "/shop/inventory/stock-destroys/:id/reject",
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
    reject.path = (id) => `/shop/inventory/stock-destroys/${encodeURIComponent(id?.toString() ?? "null")}/reject`;
})(reject || (exports.reject = reject = {}));
async function execute(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...execute.METADATA,
        template: execute.METADATA.path,
        path: execute.path(id),
    });
}
exports.execute = execute;
(function (execute) {
    execute.METADATA = {
        method: "POST",
        path: "/shop/inventory/stock-destroys/:id/execute",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    execute.path = (id) => `/shop/inventory/stock-destroys/${encodeURIComponent(id?.toString() ?? "null")}/execute`;
})(execute || (exports.execute = execute = {}));
async function cancel(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...cancel.METADATA,
        template: cancel.METADATA.path,
        path: cancel.path(id),
    });
}
exports.cancel = cancel;
(function (cancel) {
    cancel.METADATA = {
        method: "POST",
        path: "/shop/inventory/stock-destroys/:id/cancel",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    cancel.path = (id) => `/shop/inventory/stock-destroys/${encodeURIComponent(id?.toString() ?? "null")}/cancel`;
})(cancel || (exports.cancel = cancel = {}));
async function $delete(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...$delete.METADATA,
        template: $delete.METADATA.path,
        path: $delete.path(id),
    });
}
exports.$delete = $delete;
(function ($delete) {
    $delete.METADATA = {
        method: "DELETE",
        path: "/shop/inventory/stock-destroys/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    $delete.path = (id) => `/shop/inventory/stock-destroys/${encodeURIComponent(id?.toString() ?? "null")}`;
})($delete || (exports.$delete = $delete = {}));
//# sourceMappingURL=index.js.map