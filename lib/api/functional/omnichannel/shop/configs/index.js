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
exports.deleteProviderShopById = exports.updateProviderShop = exports.provider = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.provider = __importStar(require("./provider"));
async function updateProviderShop(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateProviderShop.METADATA,
        template: updateProviderShop.METADATA.path,
        path: updateProviderShop.path(id),
    }, data);
}
exports.updateProviderShop = updateProviderShop;
(function (updateProviderShop) {
    updateProviderShop.METADATA = {
        method: "PUT",
        path: "/omnichannel/shop/configs/:id",
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
    updateProviderShop.path = (id) => `/omnichannel/shop/configs/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateProviderShop || (exports.updateProviderShop = updateProviderShop = {}));
async function deleteProviderShopById(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteProviderShopById.METADATA,
        template: deleteProviderShopById.METADATA.path,
        path: deleteProviderShopById.path(id),
    });
}
exports.deleteProviderShopById = deleteProviderShopById;
(function (deleteProviderShopById) {
    deleteProviderShopById.METADATA = {
        method: "DELETE",
        path: "/omnichannel/shop/configs/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteProviderShopById.path = (id) => `/omnichannel/shop/configs/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteProviderShopById || (exports.deleteProviderShopById = deleteProviderShopById = {}));
//# sourceMappingURL=index.js.map