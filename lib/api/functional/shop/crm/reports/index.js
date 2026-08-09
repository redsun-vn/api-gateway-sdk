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
exports.$export = exports.catalog = exports.run = exports.views = exports.metrics = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.metrics = __importStar(require("./metrics"));
exports.views = __importStar(require("./views"));
exports.run = __importStar(require("./run"));
async function catalog(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...catalog.METADATA,
        template: catalog.METADATA.path,
        path: catalog.path(query),
    });
}
exports.catalog = catalog;
(function (catalog) {
    catalog.METADATA = {
        method: "GET",
        path: "/shop/crm/reports/catalog",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    catalog.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/reports/catalog";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(catalog || (exports.catalog = catalog = {}));
async function $export(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...$export.METADATA,
        template: $export.METADATA.path,
        path: $export.path(),
    }, data);
}
exports.$export = $export;
(function ($export) {
    $export.METADATA = {
        method: "POST",
        path: "/shop/crm/reports/export",
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
    $export.path = () => "/shop/crm/reports/export";
})($export || (exports.$export = $export = {}));
//# sourceMappingURL=index.js.map