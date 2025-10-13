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
exports.deactive = exports.findOne = exports.test_connection = exports.templates = exports.download = exports.print = exports.publish_with_signature = exports.publish = exports.cancel = exports.upsert = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.upsert = __importStar(require("./upsert"));
exports.cancel = __importStar(require("./cancel"));
exports.publish = __importStar(require("./publish"));
exports.publish_with_signature = __importStar(require("./publish_with_signature"));
exports.print = __importStar(require("./print"));
exports.download = __importStar(require("./download"));
exports.templates = __importStar(require("./templates"));
exports.test_connection = __importStar(require("./test_connection"));
async function findOne(connection, shopId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOne.METADATA,
        template: findOne.METADATA.path,
        path: findOne.path(shopId),
    });
}
exports.findOne = findOne;
(function (findOne) {
    findOne.METADATA = {
        method: "GET",
        path: "/shop/mobi-invoice/:shopId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (shopId) => `/shop/mobi-invoice/${encodeURIComponent(shopId?.toString() ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
async function deactive(connection, shopId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deactive.METADATA,
        template: deactive.METADATA.path,
        path: deactive.path(shopId),
    });
}
exports.deactive = deactive;
(function (deactive) {
    deactive.METADATA = {
        method: "DELETE",
        path: "/shop/mobi-invoice/:shopId/deactive",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deactive.path = (shopId) => `/shop/mobi-invoice/${encodeURIComponent(shopId?.toString() ?? "null")}/deactive`;
})(deactive || (exports.deactive = deactive = {}));
//# sourceMappingURL=index.js.map