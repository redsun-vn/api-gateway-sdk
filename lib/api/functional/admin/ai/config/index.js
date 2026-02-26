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
exports.deleteConfig = exports.setConfig = exports.getConfig = exports.listConfigs = exports.pricing = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.pricing = __importStar(require("./pricing"));
async function listConfigs(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listConfigs.METADATA,
        template: listConfigs.METADATA.path,
        path: listConfigs.path(query),
    });
}
exports.listConfigs = listConfigs;
(function (listConfigs) {
    listConfigs.METADATA = {
        method: "GET",
        path: "/admin/ai/config",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listConfigs.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/ai/config";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listConfigs || (exports.listConfigs = listConfigs = {}));
async function getConfig(connection, key) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getConfig.METADATA,
        template: getConfig.METADATA.path,
        path: getConfig.path(key),
    });
}
exports.getConfig = getConfig;
(function (getConfig) {
    getConfig.METADATA = {
        method: "GET",
        path: "/admin/ai/config/:key",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getConfig.path = (key) => `/admin/ai/config/${encodeURIComponent(key?.toString() ?? "null")}`;
})(getConfig || (exports.getConfig = getConfig = {}));
async function setConfig(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...setConfig.METADATA,
        template: setConfig.METADATA.path,
        path: setConfig.path(),
    }, body);
}
exports.setConfig = setConfig;
(function (setConfig) {
    setConfig.METADATA = {
        method: "POST",
        path: "/admin/ai/config",
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
    setConfig.path = () => "/admin/ai/config";
})(setConfig || (exports.setConfig = setConfig = {}));
async function deleteConfig(connection, key) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteConfig.METADATA,
        template: deleteConfig.METADATA.path,
        path: deleteConfig.path(key),
    });
}
exports.deleteConfig = deleteConfig;
(function (deleteConfig) {
    deleteConfig.METADATA = {
        method: "DELETE",
        path: "/admin/ai/config/:key",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteConfig.path = (key) => `/admin/ai/config/${encodeURIComponent(key?.toString() ?? "null")}`;
})(deleteConfig || (exports.deleteConfig = deleteConfig = {}));
//# sourceMappingURL=index.js.map