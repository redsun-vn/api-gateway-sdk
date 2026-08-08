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
exports.retireMetric = exports.updateMetric = exports.createMetric = exports.listMetrics = exports.active_trials = exports.contracts_signed = exports.demo_customers = exports.sale_calls = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.sale_calls = __importStar(require("./sale_calls"));
exports.demo_customers = __importStar(require("./demo_customers"));
exports.contracts_signed = __importStar(require("./contracts_signed"));
exports.active_trials = __importStar(require("./active_trials"));
async function listMetrics(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listMetrics.METADATA,
        template: listMetrics.METADATA.path,
        path: listMetrics.path(query),
    });
}
exports.listMetrics = listMetrics;
(function (listMetrics) {
    listMetrics.METADATA = {
        method: "GET",
        path: "/shop/crm/reports/metrics",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listMetrics.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/reports/metrics";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(listMetrics || (exports.listMetrics = listMetrics = {}));
async function createMetric(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createMetric.METADATA,
        template: createMetric.METADATA.path,
        path: createMetric.path(),
    }, body);
}
exports.createMetric = createMetric;
(function (createMetric) {
    createMetric.METADATA = {
        method: "POST",
        path: "/shop/crm/reports/metrics",
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
    createMetric.path = () => "/shop/crm/reports/metrics";
})(createMetric || (exports.createMetric = createMetric = {}));
async function updateMetric(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateMetric.METADATA,
        template: updateMetric.METADATA.path,
        path: updateMetric.path(id),
    }, body);
}
exports.updateMetric = updateMetric;
(function (updateMetric) {
    updateMetric.METADATA = {
        method: "PUT",
        path: "/shop/crm/reports/metrics/:id",
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
    updateMetric.path = (id) => `/shop/crm/reports/metrics/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateMetric || (exports.updateMetric = updateMetric = {}));
async function retireMetric(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...retireMetric.METADATA,
        template: retireMetric.METADATA.path,
        path: retireMetric.path(id),
    });
}
exports.retireMetric = retireMetric;
(function (retireMetric) {
    retireMetric.METADATA = {
        method: "DELETE",
        path: "/shop/crm/reports/metrics/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    retireMetric.path = (id) => `/shop/crm/reports/metrics/${encodeURIComponent(id?.toString() ?? "null")}`;
})(retireMetric || (exports.retireMetric = retireMetric = {}));
//# sourceMappingURL=index.js.map