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
exports.purchase = exports.listActive = exports.purchases = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.purchases = __importStar(require("./purchases"));
async function listActive(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listActive.METADATA,
        template: listActive.METADATA.path,
        path: listActive.path(),
    });
}
exports.listActive = listActive;
(function (listActive) {
    listActive.METADATA = {
        method: "GET",
        path: "/shop/ai/credit-packages",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listActive.path = () => "/shop/ai/credit-packages";
})(listActive || (exports.listActive = listActive = {}));
async function purchase(connection, packageId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...purchase.METADATA,
        template: purchase.METADATA.path,
        path: purchase.path(packageId),
    });
}
exports.purchase = purchase;
(function (purchase) {
    purchase.METADATA = {
        method: "POST",
        path: "/shop/ai/credit-packages/:id/purchase",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    purchase.path = (packageId) => `/shop/ai/credit-packages/${encodeURIComponent(packageId?.toString() ?? "null")}/purchase`;
})(purchase || (exports.purchase = purchase = {}));
//# sourceMappingURL=index.js.map