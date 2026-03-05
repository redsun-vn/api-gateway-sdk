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
exports.getStats = exports.comparison = exports.enhanced = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.enhanced = __importStar(require("./enhanced"));
exports.comparison = __importStar(require("./comparison"));
async function getStats(connection, roomId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getStats.METADATA,
        template: getStats.METADATA.path,
        path: getStats.path(roomId),
    });
}
exports.getStats = getStats;
(function (getStats) {
    getStats.METADATA = {
        method: "GET",
        path: "/shop/reservation/rooms/:roomId/stats",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getStats.path = (roomId) => `/shop/reservation/rooms/${encodeURIComponent(roomId?.toString() ?? "null")}/stats`;
})(getStats || (exports.getStats = getStats = {}));
//# sourceMappingURL=index.js.map