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
exports.deleteView = exports.updateView = exports.createView = exports.findAllViews = exports.run = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.run = __importStar(require("./run"));
async function findAllViews(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllViews.METADATA,
        template: findAllViews.METADATA.path,
        path: findAllViews.path(),
    });
}
exports.findAllViews = findAllViews;
(function (findAllViews) {
    findAllViews.METADATA = {
        method: "GET",
        path: "/shop/crm/reports/views",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllViews.path = () => "/shop/crm/reports/views";
})(findAllViews || (exports.findAllViews = findAllViews = {}));
async function createView(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createView.METADATA,
        template: createView.METADATA.path,
        path: createView.path(),
    }, data);
}
exports.createView = createView;
(function (createView) {
    createView.METADATA = {
        method: "POST",
        path: "/shop/crm/reports/views",
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
    createView.path = () => "/shop/crm/reports/views";
})(createView || (exports.createView = createView = {}));
async function updateView(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateView.METADATA,
        template: updateView.METADATA.path,
        path: updateView.path(id),
    }, data);
}
exports.updateView = updateView;
(function (updateView) {
    updateView.METADATA = {
        method: "PUT",
        path: "/shop/crm/reports/views/:id",
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
    updateView.path = (id) => `/shop/crm/reports/views/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateView || (exports.updateView = updateView = {}));
async function deleteView(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteView.METADATA,
        template: deleteView.METADATA.path,
        path: deleteView.path(id),
    });
}
exports.deleteView = deleteView;
(function (deleteView) {
    deleteView.METADATA = {
        method: "DELETE",
        path: "/shop/crm/reports/views/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteView.path = (id) => `/shop/crm/reports/views/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteView || (exports.deleteView = deleteView = {}));
//# sourceMappingURL=index.js.map