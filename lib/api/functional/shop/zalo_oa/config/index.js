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
exports.deleteConfig = exports.getConfig = exports.getConfigByShop = exports.updateConfig = exports.createConfig = exports.oauth = exports.verify = exports.toggle = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.toggle = __importStar(require("./toggle"));
exports.verify = __importStar(require("./verify"));
exports.oauth = __importStar(require("./oauth"));
async function createConfig(connection, input) {
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
    }, input);
}
exports.createConfig = createConfig;
(function (createConfig) {
    createConfig.METADATA = {
        method: "POST",
        path: "/shop/zalo-oa/config",
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
    createConfig.path = () => "/shop/zalo-oa/config";
})(createConfig || (exports.createConfig = createConfig = {}));
async function updateConfig(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateConfig.METADATA,
        template: updateConfig.METADATA.path,
        path: updateConfig.path(),
    }, input);
}
exports.updateConfig = updateConfig;
(function (updateConfig) {
    updateConfig.METADATA = {
        method: "PUT",
        path: "/shop/zalo-oa/config",
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
    updateConfig.path = () => "/shop/zalo-oa/config";
})(updateConfig || (exports.updateConfig = updateConfig = {}));
async function getConfigByShop(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getConfigByShop.METADATA,
        template: getConfigByShop.METADATA.path,
        path: getConfigByShop.path(),
    });
}
exports.getConfigByShop = getConfigByShop;
(function (getConfigByShop) {
    getConfigByShop.METADATA = {
        method: "GET",
        path: "/shop/zalo-oa/config",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getConfigByShop.path = () => "/shop/zalo-oa/config";
})(getConfigByShop || (exports.getConfigByShop = getConfigByShop = {}));
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
        path: "/shop/zalo-oa/config/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getConfig.path = (id) => `/shop/zalo-oa/config/${encodeURIComponent(id?.toString() ?? "null")}`;
})(getConfig || (exports.getConfig = getConfig = {}));
async function deleteConfig(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteConfig.METADATA,
        template: deleteConfig.METADATA.path,
        path: deleteConfig.path(),
    });
}
exports.deleteConfig = deleteConfig;
(function (deleteConfig) {
    deleteConfig.METADATA = {
        method: "DELETE",
        path: "/shop/zalo-oa/config",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteConfig.path = () => "/shop/zalo-oa/config";
})(deleteConfig || (exports.deleteConfig = deleteConfig = {}));
//# sourceMappingURL=index.js.map