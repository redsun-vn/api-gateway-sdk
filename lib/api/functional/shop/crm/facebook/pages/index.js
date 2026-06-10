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
exports.disconnectPage = exports.connectPage = exports.listPages = exports.forms = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.forms = __importStar(require("./forms"));
async function listPages(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listPages.METADATA,
        template: listPages.METADATA.path,
        path: listPages.path(),
    });
}
exports.listPages = listPages;
(function (listPages) {
    listPages.METADATA = {
        method: "GET",
        path: "/shop/crm/facebook/pages",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listPages.path = () => "/shop/crm/facebook/pages";
})(listPages || (exports.listPages = listPages = {}));
async function connectPage(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...connectPage.METADATA,
        template: connectPage.METADATA.path,
        path: connectPage.path(),
    }, body);
}
exports.connectPage = connectPage;
(function (connectPage) {
    connectPage.METADATA = {
        method: "POST",
        path: "/shop/crm/facebook/pages",
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
    connectPage.path = () => "/shop/crm/facebook/pages";
})(connectPage || (exports.connectPage = connectPage = {}));
async function disconnectPage(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...disconnectPage.METADATA,
        template: disconnectPage.METADATA.path,
        path: disconnectPage.path(id),
    });
}
exports.disconnectPage = disconnectPage;
(function (disconnectPage) {
    disconnectPage.METADATA = {
        method: "DELETE",
        path: "/shop/crm/facebook/pages/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    disconnectPage.path = (id) => `/shop/crm/facebook/pages/${encodeURIComponent(id?.toString() ?? "null")}`;
})(disconnectPage || (exports.disconnectPage = disconnectPage = {}));
//# sourceMappingURL=index.js.map