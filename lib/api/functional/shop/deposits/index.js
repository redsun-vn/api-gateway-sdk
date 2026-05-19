"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transactions = exports.findAll = exports.findOne = exports.cancel = exports.forfeit = exports.refund = exports.create = exports.summary = exports.apply_to_order = exports.confirm_received = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.confirm_received = __importStar(require("./confirm_received"));
exports.apply_to_order = __importStar(require("./apply_to_order"));
exports.summary = __importStar(require("./summary"));
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
        path: "/shop/deposits",
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
    create.path = () => "/shop/deposits";
})(create || (exports.create = create = {}));
async function refund(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...refund.METADATA,
        template: refund.METADATA.path,
        path: refund.path(id),
    }, body);
}
exports.refund = refund;
(function (refund) {
    refund.METADATA = {
        method: "POST",
        path: "/shop/deposits/:id/refund",
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
    refund.path = (id) => `/shop/deposits/${encodeURIComponent(id?.toString() ?? "null")}/refund`;
})(refund || (exports.refund = refund = {}));
async function forfeit(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...forfeit.METADATA,
        template: forfeit.METADATA.path,
        path: forfeit.path(id),
    }, body);
}
exports.forfeit = forfeit;
(function (forfeit) {
    forfeit.METADATA = {
        method: "POST",
        path: "/shop/deposits/:id/forfeit",
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
    forfeit.path = (id) => `/shop/deposits/${encodeURIComponent(id?.toString() ?? "null")}/forfeit`;
})(forfeit || (exports.forfeit = forfeit = {}));
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
        path: "/shop/deposits/:id/cancel",
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
    cancel.path = (id) => `/shop/deposits/${encodeURIComponent(id?.toString() ?? "null")}/cancel`;
})(cancel || (exports.cancel = cancel = {}));
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
        path: "/shop/deposits/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (id) => `/shop/deposits/${encodeURIComponent(id?.toString() ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
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
        path: "/shop/deposits",
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
        const location = "/shop/deposits";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAll || (exports.findAll = findAll = {}));
async function transactions(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...transactions.METADATA,
        template: transactions.METADATA.path,
        path: transactions.path(id),
    });
}
exports.transactions = transactions;
(function (transactions) {
    transactions.METADATA = {
        method: "GET",
        path: "/shop/deposits/:id/transactions",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    transactions.path = (id) => `/shop/deposits/${encodeURIComponent(id?.toString() ?? "null")}/transactions`;
})(transactions || (exports.transactions = transactions = {}));
//# sourceMappingURL=index.js.map