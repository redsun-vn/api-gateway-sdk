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
exports.restore = exports.$delete = exports.update = exports.reindex = exports.findAll = exports.soft = exports.deleted = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.deleted = __importStar(require("./deleted"));
exports.soft = __importStar(require("./soft"));
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
        path: "/admin/shops",
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
        const location = "/admin/shops";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAll || (exports.findAll = findAll = {}));
async function reindex(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...reindex.METADATA,
        template: reindex.METADATA.path,
        path: reindex.path(),
    });
}
exports.reindex = reindex;
(function (reindex) {
    reindex.METADATA = {
        method: "GET",
        path: "/admin/shops/reindex",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    reindex.path = () => "/admin/shops/reindex";
})(reindex || (exports.reindex = reindex = {}));
async function update(connection, data, id) {
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
        path: "/admin/shops/:id",
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
    update.path = (id) => `/admin/shops/${encodeURIComponent(id?.toString() ?? "null")}`;
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
        path: "/admin/shops/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    $delete.path = (id) => `/admin/shops/${encodeURIComponent(id?.toString() ?? "null")}`;
})($delete || (exports.$delete = $delete = {}));
async function restore(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...restore.METADATA,
        template: restore.METADATA.path,
        path: restore.path(id),
    });
}
exports.restore = restore;
(function (restore) {
    restore.METADATA = {
        method: "PATCH",
        path: "/admin/shops/:id/restore",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    restore.path = (id) => `/admin/shops/${encodeURIComponent(id?.toString() ?? "null")}/restore`;
})(restore || (exports.restore = restore = {}));
//# sourceMappingURL=index.js.map