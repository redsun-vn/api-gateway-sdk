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
exports.activity = exports.results = exports.remind = exports.stop = exports.duplicate = exports.resume = exports.pause = exports.withdraw = exports.approve = exports.submit = exports.get = exports.list = exports.participants = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.participants = __importStar(require("./participants"));
async function list(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...list.METADATA,
        template: list.METADATA.path,
        path: list.path(query),
    });
}
exports.list = list;
(function (list) {
    list.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/campaigns",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    list.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/campaigns";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
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
        path: "/shop/mkt-os/campaigns/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    get.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}`;
})(get || (exports.get = get = {}));
async function submit(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...submit.METADATA,
        template: submit.METADATA.path,
        path: submit.path(id),
    });
}
exports.submit = submit;
(function (submit) {
    submit.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/submit",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    submit.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/submit`;
})(submit || (exports.submit = submit = {}));
async function approve(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...approve.METADATA,
        template: approve.METADATA.path,
        path: approve.path(id),
    }, body);
}
exports.approve = approve;
(function (approve) {
    approve.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/approve",
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
    approve.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/approve`;
})(approve || (exports.approve = approve = {}));
async function withdraw(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...withdraw.METADATA,
        template: withdraw.METADATA.path,
        path: withdraw.path(id),
    });
}
exports.withdraw = withdraw;
(function (withdraw) {
    withdraw.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/withdraw",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    withdraw.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/withdraw`;
})(withdraw || (exports.withdraw = withdraw = {}));
async function pause(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...pause.METADATA,
        template: pause.METADATA.path,
        path: pause.path(id),
    });
}
exports.pause = pause;
(function (pause) {
    pause.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/pause",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    pause.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/pause`;
})(pause || (exports.pause = pause = {}));
async function resume(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...resume.METADATA,
        template: resume.METADATA.path,
        path: resume.path(id),
    });
}
exports.resume = resume;
(function (resume) {
    resume.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/resume",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    resume.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/resume`;
})(resume || (exports.resume = resume = {}));
async function duplicate(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...duplicate.METADATA,
        template: duplicate.METADATA.path,
        path: duplicate.path(id),
    });
}
exports.duplicate = duplicate;
(function (duplicate) {
    duplicate.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/duplicate",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    duplicate.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/duplicate`;
})(duplicate || (exports.duplicate = duplicate = {}));
async function stop(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...stop.METADATA,
        template: stop.METADATA.path,
        path: stop.path(id),
    });
}
exports.stop = stop;
(function (stop) {
    stop.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/stop",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    stop.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/stop`;
})(stop || (exports.stop = stop = {}));
async function remind(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...remind.METADATA,
        template: remind.METADATA.path,
        path: remind.path(id),
    });
}
exports.remind = remind;
(function (remind) {
    remind.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/campaigns/:id/remind",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    remind.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/remind`;
})(remind || (exports.remind = remind = {}));
async function results(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...results.METADATA,
        template: results.METADATA.path,
        path: results.path(id),
    });
}
exports.results = results;
(function (results) {
    results.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/campaigns/:id/results",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    results.path = (id) => `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/results`;
})(results || (exports.results = results = {}));
async function activity(connection, id, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...activity.METADATA,
        template: activity.METADATA.path,
        path: activity.path(id, query),
    });
}
exports.activity = activity;
(function (activity) {
    activity.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/campaigns/:id/activity",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    activity.path = (id, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/mkt-os/campaigns/${encodeURIComponent(id?.toString() ?? "null")}/activity`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(activity || (exports.activity = activity = {}));
//# sourceMappingURL=index.js.map