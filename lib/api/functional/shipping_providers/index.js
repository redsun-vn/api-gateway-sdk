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
exports.detail = exports.schedule = exports.wards = exports.districts = exports.provinces = exports.order_fee = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.order_fee = __importStar(require("./order_fee"));
exports.provinces = __importStar(require("./provinces"));
exports.districts = __importStar(require("./districts"));
exports.wards = __importStar(require("./wards"));
async function schedule(connection, shippingCode) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...schedule.METADATA,
        path: schedule.path(shippingCode),
    });
}
exports.schedule = schedule;
(function (schedule) {
    schedule.METADATA = {
        method: "GET",
        path: "/shipping-providers/:shippingCode/schedule",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    schedule.path = (shippingCode) => `/shipping-providers/${encodeURIComponent(shippingCode ?? "null")}/schedule`;
})(schedule || (exports.schedule = schedule = {}));
async function detail(connection, shippingCode, orderCode) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...detail.METADATA,
        path: detail.path(shippingCode, orderCode),
    });
}
exports.detail = detail;
(function (detail) {
    detail.METADATA = {
        method: "GET",
        path: "/shipping-providers/:shippingCode/detail/:orderCode",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    detail.path = (shippingCode, orderCode) => `/shipping-providers/${encodeURIComponent(shippingCode ?? "null")}/detail/${encodeURIComponent(orderCode ?? "null")}`;
})(detail || (exports.detail = detail = {}));
//# sourceMappingURL=index.js.map