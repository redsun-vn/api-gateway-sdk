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
exports.release = exports.cancel = exports.update = exports.detail = exports.list = exports.create = exports.item = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.item = __importStar(require("./item"));
async function create(connection, data) {
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
    }, data);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/admin/reconciliations",
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
    create.path = () => "/admin/reconciliations";
})(create || (exports.create = create = {}));
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
        path: "/admin/reconciliations",
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
        const location = "/admin/reconciliations";
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
        path: "/admin/reconciliations/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    detail.path = (id) => `/admin/reconciliations/${encodeURIComponent(id?.toString() ?? "null")}`;
})(detail || (exports.detail = detail = {}));
async function update(connection, id, data) {
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
    }, data);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/admin/reconciliations/:id",
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
    update.path = (id) => `/admin/reconciliations/${encodeURIComponent(id?.toString() ?? "null")}`;
})(update || (exports.update = update = {}));
async function cancel(connection, id, data) {
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
    }, data);
}
exports.cancel = cancel;
(function (cancel) {
    cancel.METADATA = {
        method: "PUT",
        path: "/admin/reconciliations/:id/cancel",
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
    cancel.path = (id) => `/admin/reconciliations/${encodeURIComponent(id?.toString() ?? "null")}/cancel`;
})(cancel || (exports.cancel = cancel = {}));
async function release(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...release.METADATA,
        template: release.METADATA.path,
        path: release.path(id),
    });
}
exports.release = release;
(function (release) {
    release.METADATA = {
        method: "PUT",
        path: "/admin/reconciliations/:id/release",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    release.path = (id) => `/admin/reconciliations/${encodeURIComponent(id?.toString() ?? "null")}/release`;
})(release || (exports.release = release = {}));
//# sourceMappingURL=index.js.map