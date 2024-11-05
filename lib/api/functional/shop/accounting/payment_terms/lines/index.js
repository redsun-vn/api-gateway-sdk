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
exports.deleteLine = exports.updateLine = exports.createLine = exports.multiple = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.multiple = __importStar(require("./multiple"));
async function createLine(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createLine.METADATA,
        template: createLine.METADATA.path,
        path: createLine.path(id),
    }, data);
}
exports.createLine = createLine;
(function (createLine) {
    createLine.METADATA = {
        method: "POST",
        path: "/shop/accounting/payment-terms/:id/lines",
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
    createLine.path = (id) => `/shop/accounting/payment-terms/${encodeURIComponent(id?.toString() ?? "null")}/lines`;
})(createLine || (exports.createLine = createLine = {}));
async function updateLine(connection, id, lineId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateLine.METADATA,
        template: updateLine.METADATA.path,
        path: updateLine.path(id, lineId),
    }, data);
}
exports.updateLine = updateLine;
(function (updateLine) {
    updateLine.METADATA = {
        method: "PUT",
        path: "/shop/accounting/payment-terms/:id/lines/:lineId",
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
    updateLine.path = (id, lineId) => `/shop/accounting/payment-terms/${encodeURIComponent(id?.toString() ?? "null")}/lines/${encodeURIComponent(lineId?.toString() ?? "null")}`;
})(updateLine || (exports.updateLine = updateLine = {}));
async function deleteLine(connection, id, lineId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteLine.METADATA,
        template: deleteLine.METADATA.path,
        path: deleteLine.path(id, lineId),
    });
}
exports.deleteLine = deleteLine;
(function (deleteLine) {
    deleteLine.METADATA = {
        method: "DELETE",
        path: "/shop/accounting/payment-terms/:id/lines/:lineId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteLine.path = (id, lineId) => `/shop/accounting/payment-terms/${encodeURIComponent(id?.toString() ?? "null")}/lines/${encodeURIComponent(lineId?.toString() ?? "null")}`;
})(deleteLine || (exports.deleteLine = deleteLine = {}));
//# sourceMappingURL=index.js.map