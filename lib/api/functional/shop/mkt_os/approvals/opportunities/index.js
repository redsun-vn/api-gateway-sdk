"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decideOne = exports.get = exports.remind = exports.decideMany = exports.list = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function list(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...list.METADATA,
        template: list.METADATA.path,
        path: list.path(query),
    });
}
exports.list = list;
(function (list) {
    list.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/approvals/opportunities",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    list.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/approvals/opportunities";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(list || (exports.list = list = {}));
async function decideMany(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...decideMany.METADATA,
        template: decideMany.METADATA.path,
        path: decideMany.path(),
    }, body);
}
exports.decideMany = decideMany;
(function (decideMany) {
    decideMany.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/approvals/opportunities",
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
    decideMany.path = () => "/shop/mkt-os/approvals/opportunities";
})(decideMany || (exports.decideMany = decideMany = {}));
async function remind(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...remind.METADATA,
        template: remind.METADATA.path,
        path: remind.path(),
    }, body);
}
exports.remind = remind;
(function (remind) {
    remind.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/approvals/opportunities/remind",
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
    remind.path = () => "/shop/mkt-os/approvals/opportunities/remind";
})(remind || (exports.remind = remind = {}));
async function get(connection, id, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...get.METADATA,
        template: get.METADATA.path,
        path: get.path(id, query),
    });
}
exports.get = get;
(function (get) {
    get.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/approvals/opportunities/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    get.path = (id, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/mkt-os/approvals/opportunities/${encodeURIComponent(id?.toString() ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(get || (exports.get = get = {}));
async function decideOne(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...decideOne.METADATA,
        template: decideOne.METADATA.path,
        path: decideOne.path(id),
    }, body);
}
exports.decideOne = decideOne;
(function (decideOne) {
    decideOne.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/approvals/opportunities/:id",
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
    decideOne.path = (id) => `/shop/mkt-os/approvals/opportunities/${encodeURIComponent(id?.toString() ?? "null")}`;
})(decideOne || (exports.decideOne = decideOne = {}));
//# sourceMappingURL=index.js.map