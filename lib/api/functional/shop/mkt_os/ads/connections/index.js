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
exports.disconnect = exports.health = exports.platforms = exports.list = exports.accounts = exports.oauth = exports.meta = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.meta = __importStar(require("./meta"));
exports.oauth = __importStar(require("./oauth"));
exports.accounts = __importStar(require("./accounts"));
async function list(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...list.METADATA,
        template: list.METADATA.path,
        path: list.path(),
    });
}
exports.list = list;
(function (list) {
    list.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/ads/connections",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    list.path = () => "/shop/mkt-os/ads/connections";
})(list || (exports.list = list = {}));
async function platforms(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...platforms.METADATA,
        template: platforms.METADATA.path,
        path: platforms.path(),
    });
}
exports.platforms = platforms;
(function (platforms) {
    platforms.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/ads/connections/platforms",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    platforms.path = () => "/shop/mkt-os/ads/connections/platforms";
})(platforms || (exports.platforms = platforms = {}));
async function health(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...health.METADATA,
        template: health.METADATA.path,
        path: health.path(),
    });
}
exports.health = health;
(function (health) {
    health.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/ads/connections/health",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    health.path = () => "/shop/mkt-os/ads/connections/health";
})(health || (exports.health = health = {}));
async function disconnect(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...disconnect.METADATA,
        template: disconnect.METADATA.path,
        path: disconnect.path(id),
    });
}
exports.disconnect = disconnect;
(function (disconnect) {
    disconnect.METADATA = {
        method: "DELETE",
        path: "/shop/mkt-os/ads/connections/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    disconnect.path = (id) => `/shop/mkt-os/ads/connections/${encodeURIComponent(id?.toString() ?? "null")}`;
})(disconnect || (exports.disconnect = disconnect = {}));
//# sourceMappingURL=index.js.map