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
exports.list = exports.recent = exports.lookup = exports.place = exports.wrap_up = exports.client_token = exports.softphone = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.softphone = __importStar(require("./softphone"));
exports.client_token = __importStar(require("./client_token"));
exports.wrap_up = __importStar(require("./wrap_up"));
async function place(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...place.METADATA,
        template: place.METADATA.path,
        path: place.path(),
    }, body);
}
exports.place = place;
(function (place) {
    place.METADATA = {
        method: "POST",
        path: "/shop/crm/calls/place",
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
    place.path = () => "/shop/crm/calls/place";
})(place || (exports.place = place = {}));
async function lookup(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...lookup.METADATA,
        template: lookup.METADATA.path,
        path: lookup.path(),
    }, body);
}
exports.lookup = lookup;
(function (lookup) {
    lookup.METADATA = {
        method: "POST",
        path: "/shop/crm/calls/lookup",
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
    lookup.path = () => "/shop/crm/calls/lookup";
})(lookup || (exports.lookup = lookup = {}));
async function recent(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...recent.METADATA,
        template: recent.METADATA.path,
        path: recent.path(query),
    });
}
exports.recent = recent;
(function (recent) {
    recent.METADATA = {
        method: "GET",
        path: "/shop/crm/calls/recent",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    recent.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/calls/recent";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(recent || (exports.recent = recent = {}));
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
        path: "/shop/crm/calls",
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
        const location = "/shop/crm/calls";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(list || (exports.list = list = {}));
//# sourceMappingURL=index.js.map