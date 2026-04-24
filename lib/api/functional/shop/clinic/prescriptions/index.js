"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cancel = exports.print = exports.findMany = exports.findOne = exports.issue = exports.update = exports.create = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
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
        path: "/shop/clinic/prescriptions",
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
    create.path = () => "/shop/clinic/prescriptions";
})(create || (exports.create = create = {}));
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
        method: "PATCH",
        path: "/shop/clinic/prescriptions/:id",
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
    update.path = (id) => `/shop/clinic/prescriptions/${encodeURIComponent(id?.toString() ?? "null")}`;
})(update || (exports.update = update = {}));
async function issue(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...issue.METADATA,
        template: issue.METADATA.path,
        path: issue.path(id),
    });
}
exports.issue = issue;
(function (issue) {
    issue.METADATA = {
        method: "POST",
        path: "/shop/clinic/prescriptions/:id/issue",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    issue.path = (id) => `/shop/clinic/prescriptions/${encodeURIComponent(id?.toString() ?? "null")}/issue`;
})(issue || (exports.issue = issue = {}));
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
        path: "/shop/clinic/prescriptions/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (id) => `/shop/clinic/prescriptions/${encodeURIComponent(id?.toString() ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
async function findMany(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findMany.METADATA,
        template: findMany.METADATA.path,
        path: findMany.path(query),
    });
}
exports.findMany = findMany;
(function (findMany) {
    findMany.METADATA = {
        method: "GET",
        path: "/shop/clinic/prescriptions",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findMany.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/clinic/prescriptions";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findMany || (exports.findMany = findMany = {}));
async function print(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...print.METADATA,
        template: print.METADATA.path,
        path: print.path(id),
    });
}
exports.print = print;
(function (print) {
    print.METADATA = {
        method: "POST",
        path: "/shop/clinic/prescriptions/:id/print",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    print.path = (id) => `/shop/clinic/prescriptions/${encodeURIComponent(id?.toString() ?? "null")}/print`;
})(print || (exports.print = print = {}));
async function cancel(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...cancel.METADATA,
        template: cancel.METADATA.path,
        path: cancel.path(id),
    }, body);
}
exports.cancel = cancel;
(function (cancel) {
    cancel.METADATA = {
        method: "POST",
        path: "/shop/clinic/prescriptions/:id/cancel",
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
    cancel.path = (id) => `/shop/clinic/prescriptions/${encodeURIComponent(id?.toString() ?? "null")}/cancel`;
})(cancel || (exports.cancel = cancel = {}));
//# sourceMappingURL=index.js.map