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
exports.deleteConfig = exports.updateConfig = exports.createConfig = exports.getConfig = exports.listConfigs = exports.test = exports.activate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.activate = __importStar(require("./activate"));
exports.test = __importStar(require("./test"));
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
        path: "/admin/sms/config",
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
        const location = "/admin/sms/config";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listConfigs || (exports.listConfigs = listConfigs = {}));
async function getConfig(connection, id, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getConfig.METADATA,
        template: getConfig.METADATA.path,
        path: getConfig.path(id, query),
    });
}
exports.getConfig = getConfig;
(function (getConfig) {
    getConfig.METADATA = {
        method: "GET",
        path: "/admin/sms/config/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getConfig.path = (id, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/admin/sms/config/${encodeURIComponent(id?.toString() ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getConfig || (exports.getConfig = getConfig = {}));
async function createConfig(connection, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createConfig.METADATA,
        template: createConfig.METADATA.path,
        path: createConfig.path(),
    }, dto);
}
exports.createConfig = createConfig;
(function (createConfig) {
    createConfig.METADATA = {
        method: "POST",
        path: "/admin/sms/config",
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
    createConfig.path = () => "/admin/sms/config";
})(createConfig || (exports.createConfig = createConfig = {}));
async function updateConfig(connection, id, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateConfig.METADATA,
        template: updateConfig.METADATA.path,
        path: updateConfig.path(id),
    }, dto);
}
exports.updateConfig = updateConfig;
(function (updateConfig) {
    updateConfig.METADATA = {
        method: "PUT",
        path: "/admin/sms/config/:id",
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
    updateConfig.path = (id) => `/admin/sms/config/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateConfig || (exports.updateConfig = updateConfig = {}));
async function deleteConfig(connection, id, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteConfig.METADATA,
        template: deleteConfig.METADATA.path,
        path: deleteConfig.path(id, query),
    });
}
exports.deleteConfig = deleteConfig;
(function (deleteConfig) {
    deleteConfig.METADATA = {
        method: "DELETE",
        path: "/admin/sms/config/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteConfig.path = (id, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/admin/sms/config/${encodeURIComponent(id?.toString() ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(deleteConfig || (exports.deleteConfig = deleteConfig = {}));
//# sourceMappingURL=index.js.map