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
exports.getSingleStatus = exports.getBatchStatus = exports.refresh = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.refresh = __importStar(require("./refresh"));
async function getBatchStatus(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getBatchStatus.METADATA,
        template: getBatchStatus.METADATA.path,
        path: getBatchStatus.path(query),
    });
}
exports.getBatchStatus = getBatchStatus;
(function (getBatchStatus) {
    getBatchStatus.METADATA = {
        method: "GET",
        path: "/shop/reservation/rooms/status",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getBatchStatus.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/reservation/rooms/status";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getBatchStatus || (exports.getBatchStatus = getBatchStatus = {}));
async function getSingleStatus(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getSingleStatus.METADATA,
        template: getSingleStatus.METADATA.path,
        path: getSingleStatus.path(id),
    });
}
exports.getSingleStatus = getSingleStatus;
(function (getSingleStatus) {
    getSingleStatus.METADATA = {
        method: "GET",
        path: "/shop/reservation/rooms/:id/status",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getSingleStatus.path = (id) => `/shop/reservation/rooms/${encodeURIComponent(id?.toString() ?? "null")}/status`;
})(getSingleStatus || (exports.getSingleStatus = getSingleStatus = {}));
//# sourceMappingURL=index.js.map