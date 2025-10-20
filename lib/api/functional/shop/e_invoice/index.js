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
exports.findAll = exports.deactive = exports.findOne = exports.upsert = exports.test_connection = exports.download = exports.publish_with_signature = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.publish_with_signature = __importStar(require("./publish_with_signature"));
exports.download = __importStar(require("./download"));
exports.test_connection = __importStar(require("./test_connection"));
exports.upsert = __importStar(require("./upsert"));
async function findOne(connection, shopId, provider) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOne.METADATA,
        template: findOne.METADATA.path,
        path: findOne.path(shopId, provider),
    });
}
exports.findOne = findOne;
(function (findOne) {
    findOne.METADATA = {
        method: "GET",
        path: "/shop/e-invoice/:provider/:shopId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (shopId, provider) => `/shop/e-invoice/${encodeURIComponent(provider?.toString() ?? "null")}/${encodeURIComponent(shopId?.toString() ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
async function deactive(connection, shopId, provider) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deactive.METADATA,
        template: deactive.METADATA.path,
        path: deactive.path(shopId, provider),
    });
}
exports.deactive = deactive;
(function (deactive) {
    deactive.METADATA = {
        method: "DELETE",
        path: "/shop/e-invoice/:provider/:shopId/deactive",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deactive.path = (shopId, provider) => `/shop/e-invoice/${encodeURIComponent(provider?.toString() ?? "null")}/${encodeURIComponent(shopId?.toString() ?? "null")}/deactive`;
})(deactive || (exports.deactive = deactive = {}));
async function findAll(connection, shopId, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAll.METADATA,
        template: findAll.METADATA.path,
        path: findAll.path(shopId, query),
    });
}
exports.findAll = findAll;
(function (findAll) {
    findAll.METADATA = {
        method: "GET",
        path: "/shop/e-invoice/:shopId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAll.path = (shopId, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/e-invoice/${encodeURIComponent(shopId?.toString() ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAll || (exports.findAll = findAll = {}));
//# sourceMappingURL=index.js.map