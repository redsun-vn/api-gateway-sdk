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
exports.retry = exports.create = exports.raw = exports.detail = exports.list = exports.bulk_create = exports.stats = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.stats = __importStar(require("./stats"));
exports.bulk_create = __importStar(require("./bulk_create"));
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
        path: "/shop/omnichannel/orders/mapping",
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
        const location = "/shop/omnichannel/orders/mapping";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(list || (exports.list = list = {}));
async function detail(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...detail.METADATA,
        template: detail.METADATA.path,
        path: detail.path(id),
    });
}
exports.detail = detail;
(function (detail) {
    detail.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/orders/mapping/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    detail.path = (id) => `/shop/omnichannel/orders/mapping/${encodeURIComponent(id?.toString() ?? "null")}`;
})(detail || (exports.detail = detail = {}));
async function raw(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...raw.METADATA,
        template: raw.METADATA.path,
        path: raw.path(id),
    });
}
exports.raw = raw;
(function (raw) {
    raw.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/orders/mapping/:id/raw",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    raw.path = (id) => `/shop/omnichannel/orders/mapping/${encodeURIComponent(id?.toString() ?? "null")}/raw`;
})(raw || (exports.raw = raw = {}));
async function create(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...create.METADATA,
        template: create.METADATA.path,
        path: create.path(id),
    });
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/omnichannel/orders/mapping/:id/create",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    create.path = (id) => `/shop/omnichannel/orders/mapping/${encodeURIComponent(id?.toString() ?? "null")}/create`;
})(create || (exports.create = create = {}));
async function retry(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...retry.METADATA,
        template: retry.METADATA.path,
        path: retry.path(id),
    });
}
exports.retry = retry;
(function (retry) {
    retry.METADATA = {
        method: "POST",
        path: "/shop/omnichannel/orders/mapping/:id/retry",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    retry.path = (id) => `/shop/omnichannel/orders/mapping/${encodeURIComponent(id?.toString() ?? "null")}/retry`;
})(retry || (exports.retry = retry = {}));
//# sourceMappingURL=index.js.map