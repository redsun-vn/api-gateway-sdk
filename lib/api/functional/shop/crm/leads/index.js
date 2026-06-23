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
exports.$import = exports.merge = exports.assign = exports.qualify = exports.$delete = exports.update = exports.findOne = exports.create = exports.$export = exports.findAll = exports.bant_breakdown = exports.recompute_bant = exports.score_breakdown = exports.recompute_score = exports.bulk_assign = exports.scoped = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.scoped = __importStar(require("./scoped"));
exports.bulk_assign = __importStar(require("./bulk_assign"));
exports.recompute_score = __importStar(require("./recompute_score"));
exports.score_breakdown = __importStar(require("./score_breakdown"));
exports.recompute_bant = __importStar(require("./recompute_bant"));
exports.bant_breakdown = __importStar(require("./bant_breakdown"));
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
        path: "/shop/crm/leads",
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
        const location = "/shop/crm/leads";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAll || (exports.findAll = findAll = {}));
async function $export(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...$export.METADATA,
        template: $export.METADATA.path,
        path: $export.path(query),
    });
}
exports.$export = $export;
(function ($export) {
    $export.METADATA = {
        method: "GET",
        path: "/shop/crm/leads/export",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    $export.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/leads/export";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})($export || (exports.$export = $export = {}));
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
        path: "/shop/crm/leads",
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
    create.path = () => "/shop/crm/leads";
})(create || (exports.create = create = {}));
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
        path: "/shop/crm/leads/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (id) => `/shop/crm/leads/${encodeURIComponent(id?.toString() ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
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
        path: "/shop/crm/leads/:id",
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
    update.path = (id) => `/shop/crm/leads/${encodeURIComponent(id?.toString() ?? "null")}`;
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
        path: "/shop/crm/leads/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    $delete.path = (id) => `/shop/crm/leads/${encodeURIComponent(id?.toString() ?? "null")}`;
})($delete || (exports.$delete = $delete = {}));
async function qualify(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...qualify.METADATA,
        template: qualify.METADATA.path,
        path: qualify.path(id),
    }, body);
}
exports.qualify = qualify;
(function (qualify) {
    qualify.METADATA = {
        method: "POST",
        path: "/shop/crm/leads/:id/qualify",
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
    qualify.path = (id) => `/shop/crm/leads/${encodeURIComponent(id?.toString() ?? "null")}/qualify`;
})(qualify || (exports.qualify = qualify = {}));
async function assign(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...assign.METADATA,
        template: assign.METADATA.path,
        path: assign.path(id),
    }, body);
}
exports.assign = assign;
(function (assign) {
    assign.METADATA = {
        method: "POST",
        path: "/shop/crm/leads/:id/assign",
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
    assign.path = (id) => `/shop/crm/leads/${encodeURIComponent(id?.toString() ?? "null")}/assign`;
})(assign || (exports.assign = assign = {}));
async function merge(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...merge.METADATA,
        template: merge.METADATA.path,
        path: merge.path(id),
    }, body);
}
exports.merge = merge;
(function (merge) {
    merge.METADATA = {
        method: "POST",
        path: "/shop/crm/leads/:id/merge",
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
    merge.path = (id) => `/shop/crm/leads/${encodeURIComponent(id?.toString() ?? "null")}/merge`;
})(merge || (exports.merge = merge = {}));
async function $import(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...$import.METADATA,
        template: $import.METADATA.path,
        path: $import.path(),
    }, body);
}
exports.$import = $import;
(function ($import) {
    $import.METADATA = {
        method: "POST",
        path: "/shop/crm/leads/import",
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
    $import.path = () => "/shop/crm/leads/import";
})($import || (exports.$import = $import = {}));
//# sourceMappingURL=index.js.map