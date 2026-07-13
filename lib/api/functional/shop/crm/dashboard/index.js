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
exports.leaderboard = exports.velocity = exports.funnel = exports.kpi = exports.$export = exports.widgets_config = exports.recent_activity = exports.lead_stats = exports.lead_source_analytics = exports.activity_per_opp = exports.lead_conversion = exports.revenue_trend = exports.lead_scoring_distribution = exports.pipeline_health = exports.win_loss = exports.sla_compliance = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.sla_compliance = __importStar(require("./sla_compliance"));
exports.win_loss = __importStar(require("./win_loss"));
exports.pipeline_health = __importStar(require("./pipeline_health"));
exports.lead_scoring_distribution = __importStar(require("./lead_scoring_distribution"));
exports.revenue_trend = __importStar(require("./revenue_trend"));
exports.lead_conversion = __importStar(require("./lead_conversion"));
exports.activity_per_opp = __importStar(require("./activity_per_opp"));
exports.lead_source_analytics = __importStar(require("./lead_source_analytics"));
exports.lead_stats = __importStar(require("./lead_stats"));
exports.recent_activity = __importStar(require("./recent_activity"));
exports.widgets_config = __importStar(require("./widgets_config"));
async function $export(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...$export.METADATA,
        template: $export.METADATA.path,
        path: $export.path(query),
    });
}
exports.$export = $export;
(function ($export) {
    $export.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/export",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    $export.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/export";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})($export || (exports.$export = $export = {}));
async function kpi(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...kpi.METADATA,
        template: kpi.METADATA.path,
        path: kpi.path(query),
    });
}
exports.kpi = kpi;
(function (kpi) {
    kpi.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/kpi",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    kpi.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/kpi";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(kpi || (exports.kpi = kpi = {}));
async function funnel(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...funnel.METADATA,
        template: funnel.METADATA.path,
        path: funnel.path(query),
    });
}
exports.funnel = funnel;
(function (funnel) {
    funnel.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/funnel",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    funnel.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/funnel";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(funnel || (exports.funnel = funnel = {}));
async function velocity(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...velocity.METADATA,
        template: velocity.METADATA.path,
        path: velocity.path(query),
    });
}
exports.velocity = velocity;
(function (velocity) {
    velocity.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/velocity",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    velocity.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/velocity";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(velocity || (exports.velocity = velocity = {}));
async function leaderboard(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...leaderboard.METADATA,
        template: leaderboard.METADATA.path,
        path: leaderboard.path(query),
    });
}
exports.leaderboard = leaderboard;
(function (leaderboard) {
    leaderboard.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/leaderboard",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    leaderboard.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/leaderboard";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(leaderboard || (exports.leaderboard = leaderboard = {}));
//# sourceMappingURL=index.js.map