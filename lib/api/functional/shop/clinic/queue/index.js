"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.leave = exports.done = exports.start = exports.call = exports.findMany = exports.create = void 0;
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
        path: "/shop/clinic/queue",
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
    create.path = () => "/shop/clinic/queue";
})(create || (exports.create = create = {}));
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
        path: "/shop/clinic/queue",
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
        const location = "/shop/clinic/queue";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findMany || (exports.findMany = findMany = {}));
async function call(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...call.METADATA,
        template: call.METADATA.path,
        path: call.path(id),
    });
}
exports.call = call;
(function (call) {
    call.METADATA = {
        method: "POST",
        path: "/shop/clinic/queue/:id/call",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    call.path = (id) => `/shop/clinic/queue/${encodeURIComponent(id?.toString() ?? "null")}/call`;
})(call || (exports.call = call = {}));
async function start(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...start.METADATA,
        template: start.METADATA.path,
        path: start.path(id),
    }, body);
}
exports.start = start;
(function (start) {
    start.METADATA = {
        method: "POST",
        path: "/shop/clinic/queue/:id/start",
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
    start.path = (id) => `/shop/clinic/queue/${encodeURIComponent(id?.toString() ?? "null")}/start`;
})(start || (exports.start = start = {}));
async function done(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...done.METADATA,
        template: done.METADATA.path,
        path: done.path(id),
    });
}
exports.done = done;
(function (done) {
    done.METADATA = {
        method: "POST",
        path: "/shop/clinic/queue/:id/done",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    done.path = (id) => `/shop/clinic/queue/${encodeURIComponent(id?.toString() ?? "null")}/done`;
})(done || (exports.done = done = {}));
async function leave(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...leave.METADATA,
        template: leave.METADATA.path,
        path: leave.path(id),
    }, body);
}
exports.leave = leave;
(function (leave) {
    leave.METADATA = {
        method: "POST",
        path: "/shop/clinic/queue/:id/leave",
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
    leave.path = (id) => `/shop/clinic/queue/${encodeURIComponent(id?.toString() ?? "null")}/leave`;
})(leave || (exports.leave = leave = {}));
//# sourceMappingURL=index.js.map