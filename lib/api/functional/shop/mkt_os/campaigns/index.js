"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remind = exports.withdraw = exports.approve = exports.submit = exports.get = exports.list = void 0;
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
        path: "/shop/mkt-os/campaigns",
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
        const location = "/shop/mkt-os/campaigns";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(list || (exports.list = list = {}));
async function get(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...get.METADATA,
        template: get.METADATA.path,
        path: get.path(id),
    });
}
exports.get = get;
(function (get) {
    get.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/campaigns/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    get.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}`;
})(get || (exports.get = get = {}));
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
        path: "/shop/mkt-os/campaigns/:id/submit",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    submit.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/submit`;
})(submit || (exports.submit = submit = {}));
async function approve(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...approve.METADATA,
        template: approve.METADATA.path,
        path: approve.path(id),
    }, body);
}
exports.approve = approve;
(function (approve) {
    approve.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/approve",
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
    approve.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/approve`;
})(approve || (exports.approve = approve = {}));
async function withdraw(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...withdraw.METADATA,
        template: withdraw.METADATA.path,
        path: withdraw.path(id),
    });
}
exports.withdraw = withdraw;
(function (withdraw) {
    withdraw.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/withdraw",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    withdraw.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/withdraw`;
})(withdraw || (exports.withdraw = withdraw = {}));
async function remind(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...remind.METADATA,
        template: remind.METADATA.path,
        path: remind.path(id),
    });
}
exports.remind = remind;
(function (remind) {
    remind.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/remind",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    remind.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/remind`;
})(remind || (exports.remind = remind = {}));
//# sourceMappingURL=index.js.map