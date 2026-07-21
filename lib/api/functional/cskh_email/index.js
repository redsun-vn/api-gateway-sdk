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
exports.unsubscribe = exports.novu_webhook = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.novu_webhook = __importStar(require("./novu_webhook"));
async function unsubscribe(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...unsubscribe.METADATA,
        template: unsubscribe.METADATA.path,
        path: unsubscribe.path(),
    }, data);
}
exports.unsubscribe = unsubscribe;
(function (unsubscribe) {
    unsubscribe.METADATA = {
        method: "POST",
        path: "/cskh-email/unsubscribe",
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
    unsubscribe.path = () => "/cskh-email/unsubscribe";
})(unsubscribe || (exports.unsubscribe = unsubscribe = {}));
//# sourceMappingURL=index.js.map