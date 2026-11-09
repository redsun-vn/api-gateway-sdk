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
exports.deletePlug = exports.updatePlug = exports.createPlug = exports.listPlugs = exports.runs = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.runs = __importStar(require("./runs"));
async function listPlugs(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listPlugs.METADATA,
        template: listPlugs.METADATA.path,
        path: listPlugs.path(),
    });
}
exports.listPlugs = listPlugs;
(function (listPlugs) {
    listPlugs.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/plugs",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listPlugs.path = () => "/shop/mkt-os/social/plugs";
})(listPlugs || (exports.listPlugs = listPlugs = {}));
async function createPlug(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createPlug.METADATA,
        template: createPlug.METADATA.path,
        path: createPlug.path(),
    }, body);
}
exports.createPlug = createPlug;
(function (createPlug) {
    createPlug.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/plugs",
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
    createPlug.path = () => "/shop/mkt-os/social/plugs";
})(createPlug || (exports.createPlug = createPlug = {}));
async function updatePlug(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updatePlug.METADATA,
        template: updatePlug.METADATA.path,
        path: updatePlug.path(id),
    }, body);
}
exports.updatePlug = updatePlug;
(function (updatePlug) {
    updatePlug.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/social/plugs/:id",
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
    updatePlug.path = (id) => `/shop/mkt-os/social/plugs/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updatePlug || (exports.updatePlug = updatePlug = {}));
async function deletePlug(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deletePlug.METADATA,
        template: deletePlug.METADATA.path,
        path: deletePlug.path(id),
    });
}
exports.deletePlug = deletePlug;
(function (deletePlug) {
    deletePlug.METADATA = {
        method: "DELETE",
        path: "/shop/mkt-os/social/plugs/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deletePlug.path = (id) => `/shop/mkt-os/social/plugs/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deletePlug || (exports.deletePlug = deletePlug = {}));
//# sourceMappingURL=index.js.map