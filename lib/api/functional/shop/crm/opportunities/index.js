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
exports.lost = exports.won = exports.move = exports.$delete = exports.update = exports.findOne = exports.create = exports.kanban = exports.findAll = exports.bulk_reassign = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.bulk_reassign = __importStar(require("./bulk_reassign"));
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
        path: "/shop/crm/opportunities",
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
        const location = "/shop/crm/opportunities";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAll || (exports.findAll = findAll = {}));
async function kanban(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...kanban.METADATA,
        template: kanban.METADATA.path,
        path: kanban.path(query),
    });
}
exports.kanban = kanban;
(function (kanban) {
    kanban.METADATA = {
        method: "GET",
        path: "/shop/crm/opportunities/kanban",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    kanban.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/opportunities/kanban";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(kanban || (exports.kanban = kanban = {}));
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
        path: "/shop/crm/opportunities",
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
    create.path = () => "/shop/crm/opportunities";
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
        path: "/shop/crm/opportunities/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (id) => `/shop/crm/opportunities/${encodeURIComponent(id?.toString() ?? "null")}`;
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
        path: "/shop/crm/opportunities/:id",
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
    update.path = (id) => `/shop/crm/opportunities/${encodeURIComponent(id?.toString() ?? "null")}`;
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
        path: "/shop/crm/opportunities/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    $delete.path = (id) => `/shop/crm/opportunities/${encodeURIComponent(id?.toString() ?? "null")}`;
})($delete || (exports.$delete = $delete = {}));
async function move(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...move.METADATA,
        template: move.METADATA.path,
        path: move.path(id),
    }, body);
}
exports.move = move;
(function (move) {
    move.METADATA = {
        method: "POST",
        path: "/shop/crm/opportunities/:id/move",
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
    move.path = (id) => `/shop/crm/opportunities/${encodeURIComponent(id?.toString() ?? "null")}/move`;
})(move || (exports.move = move = {}));
async function won(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...won.METADATA,
        template: won.METADATA.path,
        path: won.path(id),
    }, body);
}
exports.won = won;
(function (won) {
    won.METADATA = {
        method: "POST",
        path: "/shop/crm/opportunities/:id/won",
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
    won.path = (id) => `/shop/crm/opportunities/${encodeURIComponent(id?.toString() ?? "null")}/won`;
})(won || (exports.won = won = {}));
async function lost(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...lost.METADATA,
        template: lost.METADATA.path,
        path: lost.path(id),
    }, body);
}
exports.lost = lost;
(function (lost) {
    lost.METADATA = {
        method: "POST",
        path: "/shop/crm/opportunities/:id/lost",
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
    lost.path = (id) => `/shop/crm/opportunities/${encodeURIComponent(id?.toString() ?? "null")}/lost`;
})(lost || (exports.lost = lost = {}));
//# sourceMappingURL=index.js.map