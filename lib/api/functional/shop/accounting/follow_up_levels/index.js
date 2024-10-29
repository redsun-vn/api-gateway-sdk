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
exports.findOneLevel = exports.lines = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.lines = __importStar(require("./lines"));
async function findOneLevel(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneLevel.METADATA,
        template: findOneLevel.METADATA.path,
        path: findOneLevel.path(),
    });
}
exports.findOneLevel = findOneLevel;
(function (findOneLevel) {
    findOneLevel.METADATA = {
        method: "GET",
        path: "/shop/accounting/follow-up-levels",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOneLevel.path = () => "/shop/accounting/follow-up-levels";
})(findOneLevel || (exports.findOneLevel = findOneLevel = {}));
//# sourceMappingURL=index.js.map