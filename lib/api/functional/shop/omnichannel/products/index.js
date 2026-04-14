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
exports.getProductDetailOnProvider = exports.getProductsOnProvider = exports.mapping = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.mapping = __importStar(require("./mapping"));
async function getProductsOnProvider(connection, provider) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getProductsOnProvider.METADATA,
        template: getProductsOnProvider.METADATA.path,
        path: getProductsOnProvider.path(provider),
    });
}
exports.getProductsOnProvider = getProductsOnProvider;
(function (getProductsOnProvider) {
    getProductsOnProvider.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/:provider/products",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getProductsOnProvider.path = (provider) => `/shop/omnichannel/${encodeURIComponent(provider?.toString() ?? "null")}/products`;
})(getProductsOnProvider || (exports.getProductsOnProvider = getProductsOnProvider = {}));
async function getProductDetailOnProvider(connection, provider, productId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getProductDetailOnProvider.METADATA,
        template: getProductDetailOnProvider.METADATA.path,
        path: getProductDetailOnProvider.path(provider, productId),
    });
}
exports.getProductDetailOnProvider = getProductDetailOnProvider;
(function (getProductDetailOnProvider) {
    getProductDetailOnProvider.METADATA = {
        method: "GET",
        path: "/shop/omnichannel/:provider/products/:productId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getProductDetailOnProvider.path = (provider, productId) => `/shop/omnichannel/${encodeURIComponent(provider?.toString() ?? "null")}/products/${encodeURIComponent(productId?.toString() ?? "null")}`;
})(getProductDetailOnProvider || (exports.getProductDetailOnProvider = getProductDetailOnProvider = {}));
//# sourceMappingURL=index.js.map