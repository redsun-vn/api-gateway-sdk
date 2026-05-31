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
exports.activate = exports.cascade = exports.$delete = exports.update = exports.create = exports.progress = exports.findOne = exports.leaderboard = exports.findAll = exports.hierarchy_options = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.hierarchy_options = __importStar(require("./hierarchy_options"));
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
        path: "/shop/crm/kpi-targets",
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
        const location = "/shop/crm/kpi-targets";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAll || (exports.findAll = findAll = {}));
async function leaderboard(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...leaderboard.METADATA,
        template: leaderboard.METADATA.path,
        path: leaderboard.path(query),
    });
}
exports.leaderboard = leaderboard;
(function (leaderboard) {
    leaderboard.METADATA = {
        method: "GET",
        path: "/shop/crm/kpi-targets/leaderboard",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    leaderboard.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/kpi-targets/leaderboard";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(leaderboard || (exports.leaderboard = leaderboard = {}));
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
        path: "/shop/crm/kpi-targets/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (id) => `/shop/crm/kpi-targets/${encodeURIComponent(id?.toString() ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
async function progress(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...progress.METADATA,
        template: progress.METADATA.path,
        path: progress.path(id),
    });
}
exports.progress = progress;
(function (progress) {
    progress.METADATA = {
        method: "GET",
        path: "/shop/crm/kpi-targets/:id/progress",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    progress.path = (id) => `/shop/crm/kpi-targets/${encodeURIComponent(id?.toString() ?? "null")}/progress`;
})(progress || (exports.progress = progress = {}));
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
        path: "/shop/crm/kpi-targets",
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
    create.path = () => "/shop/crm/kpi-targets";
})(create || (exports.create = create = {}));
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
        path: "/shop/crm/kpi-targets/:id",
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
    update.path = (id) => `/shop/crm/kpi-targets/${encodeURIComponent(id?.toString() ?? "null")}`;
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
        path: "/shop/crm/kpi-targets/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    $delete.path = (id) => `/shop/crm/kpi-targets/${encodeURIComponent(id?.toString() ?? "null")}`;
})($delete || (exports.$delete = $delete = {}));
async function cascade(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...cascade.METADATA,
        template: cascade.METADATA.path,
        path: cascade.path(id),
    }, body);
}
exports.cascade = cascade;
(function (cascade) {
    cascade.METADATA = {
        method: "POST",
        path: "/shop/crm/kpi-targets/:id/cascade",
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
    cascade.path = (id) => `/shop/crm/kpi-targets/${encodeURIComponent(id?.toString() ?? "null")}/cascade`;
})(cascade || (exports.cascade = cascade = {}));
async function activate(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...activate.METADATA,
        template: activate.METADATA.path,
        path: activate.path(id),
    });
}
exports.activate = activate;
(function (activate) {
    activate.METADATA = {
        method: "POST",
        path: "/shop/crm/kpi-targets/:id/activate",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    activate.path = (id) => `/shop/crm/kpi-targets/${encodeURIComponent(id?.toString() ?? "null")}/activate`;
})(activate || (exports.activate = activate = {}));
//# sourceMappingURL=index.js.map