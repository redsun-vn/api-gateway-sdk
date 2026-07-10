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
exports.remove = exports.update = exports.create = exports.dashboard = exports.mine = exports.findAll = exports.members = exports.detail = exports.config = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.config = __importStar(require("./config"));
exports.detail = __importStar(require("./detail"));
exports.members = __importStar(require("./members"));
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
        path: "/shop/crm/teams",
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
        const location = "/shop/crm/teams";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAll || (exports.findAll = findAll = {}));
async function mine(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...mine.METADATA,
        template: mine.METADATA.path,
        path: mine.path(),
    });
}
exports.mine = mine;
(function (mine) {
    mine.METADATA = {
        method: "GET",
        path: "/shop/crm/teams/mine",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    mine.path = () => "/shop/crm/teams/mine";
})(mine || (exports.mine = mine = {}));
async function dashboard(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...dashboard.METADATA,
        template: dashboard.METADATA.path,
        path: dashboard.path(query),
    });
}
exports.dashboard = dashboard;
(function (dashboard) {
    dashboard.METADATA = {
        method: "GET",
        path: "/shop/crm/teams/dashboard",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    dashboard.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/teams/dashboard";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(dashboard || (exports.dashboard = dashboard = {}));
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
        path: "/shop/crm/teams",
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
    create.path = () => "/shop/crm/teams";
})(create || (exports.create = create = {}));
async function update(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...update.METADATA,
        template: update.METADATA.path,
        path: update.path(),
    }, body);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/shop/crm/teams",
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
    update.path = () => "/shop/crm/teams";
})(update || (exports.update = update = {}));
async function remove(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...remove.METADATA,
        template: remove.METADATA.path,
        path: remove.path(query),
    });
}
exports.remove = remove;
(function (remove) {
    remove.METADATA = {
        method: "DELETE",
        path: "/shop/crm/teams",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    remove.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/teams";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(remove || (exports.remove = remove = {}));
//# sourceMappingURL=index.js.map