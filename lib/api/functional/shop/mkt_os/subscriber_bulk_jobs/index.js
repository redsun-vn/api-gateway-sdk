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
exports.get = exports.list = exports.deletes = exports.unsubscribes = exports.list_members = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.list_members = __importStar(require("./list_members"));
exports.unsubscribes = __importStar(require("./unsubscribes"));
exports.deletes = __importStar(require("./deletes"));
async function list(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...list.METADATA,
        template: list.METADATA.path,
        path: list.path(),
    });
}
exports.list = list;
(function (list) {
    list.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/subscriber-bulk-jobs",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    list.path = () => "/shop/mkt-os/subscriber-bulk-jobs";
})(list || (exports.list = list = {}));
async function get(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...get.METADATA,
        template: get.METADATA.path,
        path: get.path(id),
    });
}
exports.get = get;
(function (get) {
    get.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/subscriber-bulk-jobs/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    get.path = (id) => `/shop/mkt-os/subscriber-bulk-jobs/${encodeURIComponent(id?.toString() ?? "null")}`;
})(get || (exports.get = get = {}));
//# sourceMappingURL=index.js.map