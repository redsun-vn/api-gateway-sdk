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
exports.deleteSet = exports.updateSet = exports.getSet = exports.createSet = exports.listSets = exports.apply = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.apply = __importStar(require("./apply"));
async function listSets(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listSets.METADATA,
        template: listSets.METADATA.path,
        path: listSets.path(),
    });
}
exports.listSets = listSets;
(function (listSets) {
    listSets.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/sets",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listSets.path = () => "/shop/mkt-os/social/sets";
})(listSets || (exports.listSets = listSets = {}));
async function createSet(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createSet.METADATA,
        template: createSet.METADATA.path,
        path: createSet.path(),
    }, body);
}
exports.createSet = createSet;
(function (createSet) {
    createSet.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/sets",
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
    createSet.path = () => "/shop/mkt-os/social/sets";
})(createSet || (exports.createSet = createSet = {}));
async function getSet(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getSet.METADATA,
        template: getSet.METADATA.path,
        path: getSet.path(id),
    });
}
exports.getSet = getSet;
(function (getSet) {
    getSet.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/sets/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getSet.path = (id) => `/shop/mkt-os/social/sets/${encodeURIComponent(id?.toString() ?? "null")}`;
})(getSet || (exports.getSet = getSet = {}));
async function updateSet(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateSet.METADATA,
        template: updateSet.METADATA.path,
        path: updateSet.path(id),
    }, body);
}
exports.updateSet = updateSet;
(function (updateSet) {
    updateSet.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/social/sets/:id",
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
    updateSet.path = (id) => `/shop/mkt-os/social/sets/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateSet || (exports.updateSet = updateSet = {}));
async function deleteSet(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteSet.METADATA,
        template: deleteSet.METADATA.path,
        path: deleteSet.path(id),
    });
}
exports.deleteSet = deleteSet;
(function (deleteSet) {
    deleteSet.METADATA = {
        method: "DELETE",
        path: "/shop/mkt-os/social/sets/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteSet.path = (id) => `/shop/mkt-os/social/sets/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteSet || (exports.deleteSet = deleteSet = {}));
//# sourceMappingURL=index.js.map