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
exports.$delete = exports.update = exports.findByTable = exports.create = exports.status = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.status = __importStar(require("./status"));
async function create(connection, tableId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...create.METADATA,
        template: create.METADATA.path,
        path: create.path(tableId),
    }, data);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/reservation/tables/:tableId/notes",
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
    create.path = (tableId) => `/shop/reservation/tables/${encodeURIComponent(tableId?.toString() ?? "null")}/notes`;
})(create || (exports.create = create = {}));
async function findByTable(connection, tableId, filter) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findByTable.METADATA,
        template: findByTable.METADATA.path,
        path: findByTable.path(tableId, filter),
    });
}
exports.findByTable = findByTable;
(function (findByTable) {
    findByTable.METADATA = {
        method: "GET",
        path: "/shop/reservation/tables/:tableId/notes",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findByTable.path = (tableId, filter) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(filter))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/reservation/tables/${encodeURIComponent(tableId?.toString() ?? "null")}/notes`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findByTable || (exports.findByTable = findByTable = {}));
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
        path: "/shop/reservation/tables/notes/:id",
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
    update.path = (id) => `/shop/reservation/tables/notes/${encodeURIComponent(id?.toString() ?? "null")}`;
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
        path: "/shop/reservation/tables/notes/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    $delete.path = (id) => `/shop/reservation/tables/notes/${encodeURIComponent(id?.toString() ?? "null")}`;
})($delete || (exports.$delete = $delete = {}));
//# sourceMappingURL=index.js.map