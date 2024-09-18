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
exports.$delete = exports.update = exports.create = exports.complete = exports.confirm = exports.verify = exports.findOne = exports.findAll = exports.copy = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.copy = __importStar(require("./copy"));
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
        path: "/shop/order/draf-orders",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
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
        const location = "/shop/order/draf-orders";
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
        path: "/shop/order/draf-orders/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findOne.path = (id) => `/shop/order/draf-orders/${encodeURIComponent(id ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
async function verify(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...verify.METADATA,
        template: verify.METADATA.path,
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
    verify.path = (id) => `/shop/order/draf-orders/${encodeURIComponent(id ?? "null")}/verify`;
})(verify || (exports.verify = verify = {}));
async function confirm(connection, id, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...confirm.METADATA,
        template: confirm.METADATA.path,
        path: confirm.path(id),
    }, input);
}
exports.confirm = confirm;
(function (confirm) {
    confirm.METADATA = {
        method: "PUT",
        path: "/shop/order/draf-orders/:id/confirm",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    confirm.path = (id) => `/shop/order/draf-orders/${encodeURIComponent(id ?? "null")}/confirm`;
})(confirm || (exports.confirm = confirm = {}));
async function complete(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...complete.METADATA,
        template: complete.METADATA.path,
        path: complete.path(id),
    });
}
exports.complete = complete;
(function (complete) {
    complete.METADATA = {
        method: "PUT",
        path: "/shop/order/draf-orders/:id/complete",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    complete.path = (id) => `/shop/order/draf-orders/${encodeURIComponent(id ?? "null")}/complete`;
})(complete || (exports.complete = complete = {}));
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
        path: "/shop/order/draf-orders",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    create.path = () => "/shop/order/draf-orders";
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
        path: "/shop/order/draf-orders/:id",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    update.path = (id) => `/shop/order/draf-orders/${encodeURIComponent(id ?? "null")}`;
})(update || (exports.update = update = {}));
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
        path: "/shop/order/draf-orders/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    $delete.path = (id) => `/shop/order/draf-orders/${encodeURIComponent(id ?? "null")}`;
})($delete || (exports.$delete = $delete = {}));
//# sourceMappingURL=index.js.map