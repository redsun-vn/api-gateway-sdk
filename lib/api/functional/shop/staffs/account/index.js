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
exports.revokeAccount = exports.grantAccount = exports.reinstate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.reinstate = __importStar(require("./reinstate"));
async function grantAccount(connection, input, id) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...grantAccount.METADATA,
        template: grantAccount.METADATA.path,
        path: grantAccount.path(id),
    }, input);
}
exports.grantAccount = grantAccount;
(function (grantAccount) {
    grantAccount.METADATA = {
        method: "POST",
        path: "/shop/staffs/:id/account",
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
    grantAccount.path = (id) => `/shop/staffs/${encodeURIComponent(id?.toString() ?? "null")}/account`;
})(grantAccount || (exports.grantAccount = grantAccount = {}));
async function revokeAccount(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...revokeAccount.METADATA,
        template: revokeAccount.METADATA.path,
        path: revokeAccount.path(id),
    });
}
exports.revokeAccount = revokeAccount;
(function (revokeAccount) {
    revokeAccount.METADATA = {
        method: "DELETE",
        path: "/shop/staffs/:id/account",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    revokeAccount.path = (id) => `/shop/staffs/${encodeURIComponent(id?.toString() ?? "null")}/account`;
})(revokeAccount || (exports.revokeAccount = revokeAccount = {}));
//# sourceMappingURL=index.js.map