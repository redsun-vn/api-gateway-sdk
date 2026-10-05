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
exports.deleteSenderIdentity = exports.updateSenderIdentity = exports.createSenderIdentity = exports.listSenderIdentities = exports.test_send = exports.$default = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.$default = __importStar(require("./$default"));
exports.test_send = __importStar(require("./test_send"));
async function listSenderIdentities(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listSenderIdentities.METADATA,
        template: listSenderIdentities.METADATA.path,
        path: listSenderIdentities.path(),
    });
}
exports.listSenderIdentities = listSenderIdentities;
(function (listSenderIdentities) {
    listSenderIdentities.METADATA = {
        method: "GET",
        path: "/shop/email/identities",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listSenderIdentities.path = () => "/shop/email/identities";
})(listSenderIdentities || (exports.listSenderIdentities = listSenderIdentities = {}));
async function createSenderIdentity(connection, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createSenderIdentity.METADATA,
        template: createSenderIdentity.METADATA.path,
        path: createSenderIdentity.path(),
    }, dto);
}
exports.createSenderIdentity = createSenderIdentity;
(function (createSenderIdentity) {
    createSenderIdentity.METADATA = {
        method: "POST",
        path: "/shop/email/identities",
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
    createSenderIdentity.path = () => "/shop/email/identities";
})(createSenderIdentity || (exports.createSenderIdentity = createSenderIdentity = {}));
async function updateSenderIdentity(connection, id, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateSenderIdentity.METADATA,
        template: updateSenderIdentity.METADATA.path,
        path: updateSenderIdentity.path(id),
    }, dto);
}
exports.updateSenderIdentity = updateSenderIdentity;
(function (updateSenderIdentity) {
    updateSenderIdentity.METADATA = {
        method: "PUT",
        path: "/shop/email/identities/:id",
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
    updateSenderIdentity.path = (id) => `/shop/email/identities/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateSenderIdentity || (exports.updateSenderIdentity = updateSenderIdentity = {}));
async function deleteSenderIdentity(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteSenderIdentity.METADATA,
        template: deleteSenderIdentity.METADATA.path,
        path: deleteSenderIdentity.path(id),
    });
}
exports.deleteSenderIdentity = deleteSenderIdentity;
(function (deleteSenderIdentity) {
    deleteSenderIdentity.METADATA = {
        method: "DELETE",
        path: "/shop/email/identities/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteSenderIdentity.path = (id) => `/shop/email/identities/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteSenderIdentity || (exports.deleteSenderIdentity = deleteSenderIdentity = {}));
//# sourceMappingURL=index.js.map