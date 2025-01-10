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
exports.create = exports.getAll = exports.getConfig = exports.updateConfig = exports.createConfig = exports.access_token = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.access_token = __importStar(require("./access_token"));
async function createConfig(connection, createConfigDto) {
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
    }, createConfigDto);
}
exports.createConfig = createConfig;
(function (createConfig) {
    createConfig.METADATA = {
        method: "POST",
        path: "/shop/tomotek-config",
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
    createConfig.path = () => "/shop/tomotek-config";
})(createConfig || (exports.createConfig = createConfig = {}));
async function updateConfig(connection, id, updateConfigDto) {
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
    }, updateConfigDto);
}
exports.updateConfig = updateConfig;
(function (updateConfig) {
    updateConfig.METADATA = {
        method: "PUT",
        path: "/shop/tomotek-config/:id",
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
    updateConfig.path = (id) => `/shop/tomotek-config/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateConfig || (exports.updateConfig = updateConfig = {}));
async function getConfig(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getConfig.METADATA,
        template: getConfig.METADATA.path,
        path: getConfig.path(id),
    });
}
exports.getConfig = getConfig;
(function (getConfig) {
    getConfig.METADATA = {
        method: "GET",
        path: "/shop/tomotek-config/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getConfig.path = (id) => `/shop/tomotek-config/${encodeURIComponent(id?.toString() ?? "null")}`;
})(getConfig || (exports.getConfig = getConfig = {}));
async function getAll(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getAll.METADATA,
        template: getAll.METADATA.path,
        path: getAll.path(),
    });
}
exports.getAll = getAll;
(function (getAll) {
    getAll.METADATA = {
        method: "GET",
        path: "/shop/tomotek-config",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getAll.path = () => "/shop/tomotek-config";
})(getAll || (exports.getAll = getAll = {}));
async function create(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...create.METADATA,
        template: create.METADATA.path,
        path: create.path(id),
    });
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "DELETE",
        path: "/shop/tomotek-config/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    create.path = (id) => `/shop/tomotek-config/${encodeURIComponent(id?.toString() ?? "null")}`;
})(create || (exports.create = create = {}));
//# sourceMappingURL=index.js.map