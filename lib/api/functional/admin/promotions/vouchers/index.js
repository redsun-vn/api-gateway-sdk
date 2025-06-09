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
exports.findOnePromotionVoucher = exports.deletePromotionVoucher = exports.updatePromotionVoucher = exports.createPromotionVoucher = exports.findAllPromotionVouchers = exports.deactivate = exports.assign = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.assign = __importStar(require("./assign"));
exports.deactivate = __importStar(require("./deactivate"));
async function findAllPromotionVouchers(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllPromotionVouchers.METADATA,
        template: findAllPromotionVouchers.METADATA.path,
        path: findAllPromotionVouchers.path(query),
    });
}
exports.findAllPromotionVouchers = findAllPromotionVouchers;
(function (findAllPromotionVouchers) {
    findAllPromotionVouchers.METADATA = {
        method: "GET",
        path: "/admin/promotions/vouchers",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllPromotionVouchers.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/promotions/vouchers";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllPromotionVouchers || (exports.findAllPromotionVouchers = findAllPromotionVouchers = {}));
async function createPromotionVoucher(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createPromotionVoucher.METADATA,
        template: createPromotionVoucher.METADATA.path,
        path: createPromotionVoucher.path(),
    }, body);
}
exports.createPromotionVoucher = createPromotionVoucher;
(function (createPromotionVoucher) {
    createPromotionVoucher.METADATA = {
        method: "POST",
        path: "/admin/promotions/vouchers",
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
    createPromotionVoucher.path = () => "/admin/promotions/vouchers";
})(createPromotionVoucher || (exports.createPromotionVoucher = createPromotionVoucher = {}));
async function updatePromotionVoucher(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updatePromotionVoucher.METADATA,
        template: updatePromotionVoucher.METADATA.path,
        path: updatePromotionVoucher.path(id),
    }, body);
}
exports.updatePromotionVoucher = updatePromotionVoucher;
(function (updatePromotionVoucher) {
    updatePromotionVoucher.METADATA = {
        method: "PUT",
        path: "/admin/promotions/vouchers/:id",
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
    updatePromotionVoucher.path = (id) => `/admin/promotions/vouchers/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updatePromotionVoucher || (exports.updatePromotionVoucher = updatePromotionVoucher = {}));
async function deletePromotionVoucher(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deletePromotionVoucher.METADATA,
        template: deletePromotionVoucher.METADATA.path,
        path: deletePromotionVoucher.path(id),
    });
}
exports.deletePromotionVoucher = deletePromotionVoucher;
(function (deletePromotionVoucher) {
    deletePromotionVoucher.METADATA = {
        method: "DELETE",
        path: "/admin/promotions/vouchers/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deletePromotionVoucher.path = (id) => `/admin/promotions/vouchers/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deletePromotionVoucher || (exports.deletePromotionVoucher = deletePromotionVoucher = {}));
async function findOnePromotionVoucher(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOnePromotionVoucher.METADATA,
        template: findOnePromotionVoucher.METADATA.path,
        path: findOnePromotionVoucher.path(id),
    });
}
exports.findOnePromotionVoucher = findOnePromotionVoucher;
(function (findOnePromotionVoucher) {
    findOnePromotionVoucher.METADATA = {
        method: "GET",
        path: "/admin/promotions/vouchers/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOnePromotionVoucher.path = (id) => `/admin/promotions/vouchers/${encodeURIComponent(id?.toString() ?? "null")}`;
})(findOnePromotionVoucher || (exports.findOnePromotionVoucher = findOnePromotionVoucher = {}));
//# sourceMappingURL=index.js.map