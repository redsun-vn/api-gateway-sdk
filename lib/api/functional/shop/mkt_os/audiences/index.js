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
exports.archive = exports.update = exports.get = exports.fields = exports.create = exports.list = exports.preview = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.preview = __importStar(require("./preview"));
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
        path: "/shop/mkt-os/audiences",
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
        const location = "/shop/mkt-os/audiences";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(list || (exports.list = list = {}));
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
        path: "/shop/mkt-os/audiences",
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
    create.path = () => "/shop/mkt-os/audiences";
})(create || (exports.create = create = {}));
async function fields(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...fields.METADATA,
        template: fields.METADATA.path,
        path: fields.path(query),
    });
}
exports.fields = fields;
(function (fields) {
    fields.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/audiences/fields",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    fields.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/audiences/fields";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(fields || (exports.fields = fields = {}));
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
        path: "/shop/mkt-os/audiences/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    get.path = (id) => `/shop/mkt-os/audiences/${encodeURIComponent(id?.toString() ?? "null")}`;
})(get || (exports.get = get = {}));
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
        method: "PUT",
        path: "/shop/mkt-os/audiences/:id",
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
    update.path = (id) => `/shop/mkt-os/audiences/${encodeURIComponent(id?.toString() ?? "null")}`;
})(update || (exports.update = update = {}));
async function archive(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...archive.METADATA,
        template: archive.METADATA.path,
        path: archive.path(id),
    });
}
exports.archive = archive;
(function (archive) {
    archive.METADATA = {
        method: "DELETE",
        path: "/shop/mkt-os/audiences/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    archive.path = (id) => `/shop/mkt-os/audiences/${encodeURIComponent(id?.toString() ?? "null")}`;
})(archive || (exports.archive = archive = {}));
//# sourceMappingURL=index.js.map