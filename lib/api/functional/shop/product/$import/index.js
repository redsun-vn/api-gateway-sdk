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
exports.commit = exports.status = exports.error_file = exports.preview = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.preview = __importStar(require("./preview"));
exports.error_file = __importStar(require("./error_file"));
async function status(connection, importId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...status.METADATA,
        template: status.METADATA.path,
        path: status.path(importId),
    });
}
exports.status = status;
(function (status) {
    status.METADATA = {
        method: "GET",
        path: "/shop/product/import/:importId/status",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    status.path = (importId) => `/shop/product/import/${encodeURIComponent(importId?.toString() ?? "null")}/status`;
})(status || (exports.status = status = {}));
async function commit(connection, importId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...commit.METADATA,
        template: commit.METADATA.path,
        path: commit.path(importId),
    });
}
exports.commit = commit;
(function (commit) {
    commit.METADATA = {
        method: "POST",
        path: "/shop/product/import/:importId/commit",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    commit.path = (importId) => `/shop/product/import/${encodeURIComponent(importId?.toString() ?? "null")}/commit`;
})(commit || (exports.commit = commit = {}));
//# sourceMappingURL=index.js.map