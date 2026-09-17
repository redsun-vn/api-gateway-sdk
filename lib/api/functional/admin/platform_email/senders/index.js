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
exports.deactivate = exports.activate = exports.upsert = exports.get = exports.list = exports.test_send = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.test_send = __importStar(require("./test_send"));
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
        path: "/admin/platform-email/senders",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    list.path = () => "/admin/platform-email/senders";
})(list || (exports.list = list = {}));
async function get(connection, brandCode) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...get.METADATA,
        template: get.METADATA.path,
        path: get.path(brandCode),
    });
}
exports.get = get;
(function (get) {
    get.METADATA = {
        method: "GET",
        path: "/admin/platform-email/senders/:brandCode",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    get.path = (brandCode) => `/admin/platform-email/senders/${encodeURIComponent(brandCode?.toString() ?? "null")}`;
})(get || (exports.get = get = {}));
async function upsert(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...upsert.METADATA,
        template: upsert.METADATA.path,
        path: upsert.path(),
    }, body);
}
exports.upsert = upsert;
(function (upsert) {
    upsert.METADATA = {
        method: "PUT",
        path: "/admin/platform-email/senders",
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
    upsert.path = () => "/admin/platform-email/senders";
})(upsert || (exports.upsert = upsert = {}));
async function activate(connection, brandCode) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...activate.METADATA,
        template: activate.METADATA.path,
        path: activate.path(brandCode),
    });
}
exports.activate = activate;
(function (activate) {
    activate.METADATA = {
        method: "POST",
        path: "/admin/platform-email/senders/:brandCode/activate",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    activate.path = (brandCode) => `/admin/platform-email/senders/${encodeURIComponent(brandCode?.toString() ?? "null")}/activate`;
})(activate || (exports.activate = activate = {}));
async function deactivate(connection, brandCode) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deactivate.METADATA,
        template: deactivate.METADATA.path,
        path: deactivate.path(brandCode),
    });
}
exports.deactivate = deactivate;
(function (deactivate) {
    deactivate.METADATA = {
        method: "POST",
        path: "/admin/platform-email/senders/:brandCode/deactivate",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    deactivate.path = (brandCode) => `/admin/platform-email/senders/${encodeURIComponent(brandCode?.toString() ?? "null")}/deactivate`;
})(deactivate || (exports.deactivate = deactivate = {}));
//# sourceMappingURL=index.js.map