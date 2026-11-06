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
exports.update = exports.get = exports.create = exports.calendar = exports.list = exports.cancel = exports.reschedule = exports.schedule = exports.reject = exports.approve = exports.submit = exports.settings = exports.publish_now = exports.targets = exports.notes = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.notes = __importStar(require("./notes"));
exports.targets = __importStar(require("./targets"));
exports.publish_now = __importStar(require("./publish_now"));
exports.settings = __importStar(require("./settings"));
async function submit(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...submit.METADATA,
        template: submit.METADATA.path,
        path: submit.path(id),
    }, body);
}
exports.submit = submit;
(function (submit) {
    submit.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/posts/:id/submit",
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
    submit.path = (id) => `/shop/mkt-os/social/posts/${encodeURIComponent(id?.toString() ?? "null")}/submit`;
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
        path: "/shop/mkt-os/social/posts/:id/approve",
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
    approve.path = (id) => `/shop/mkt-os/social/posts/${encodeURIComponent(id?.toString() ?? "null")}/approve`;
})(approve || (exports.approve = approve = {}));
async function reject(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...reject.METADATA,
        template: reject.METADATA.path,
        path: reject.path(id),
    }, body);
}
exports.reject = reject;
(function (reject) {
    reject.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/posts/:id/reject",
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
    reject.path = (id) => `/shop/mkt-os/social/posts/${encodeURIComponent(id?.toString() ?? "null")}/reject`;
})(reject || (exports.reject = reject = {}));
async function schedule(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...schedule.METADATA,
        template: schedule.METADATA.path,
        path: schedule.path(id),
    }, body);
}
exports.schedule = schedule;
(function (schedule) {
    schedule.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/posts/:id/schedule",
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
    schedule.path = (id) => `/shop/mkt-os/social/posts/${encodeURIComponent(id?.toString() ?? "null")}/schedule`;
})(schedule || (exports.schedule = schedule = {}));
async function reschedule(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...reschedule.METADATA,
        template: reschedule.METADATA.path,
        path: reschedule.path(id),
    }, body);
}
exports.reschedule = reschedule;
(function (reschedule) {
    reschedule.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/posts/:id/reschedule",
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
    reschedule.path = (id) => `/shop/mkt-os/social/posts/${encodeURIComponent(id?.toString() ?? "null")}/reschedule`;
})(reschedule || (exports.reschedule = reschedule = {}));
async function cancel(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...cancel.METADATA,
        template: cancel.METADATA.path,
        path: cancel.path(id),
    }, body);
}
exports.cancel = cancel;
(function (cancel) {
    cancel.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/posts/:id/cancel",
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
    cancel.path = (id) => `/shop/mkt-os/social/posts/${encodeURIComponent(id?.toString() ?? "null")}/cancel`;
})(cancel || (exports.cancel = cancel = {}));
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
        path: "/shop/mkt-os/social/posts",
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
        const location = "/shop/mkt-os/social/posts";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(list || (exports.list = list = {}));
async function calendar(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...calendar.METADATA,
        template: calendar.METADATA.path,
        path: calendar.path(query),
    });
}
exports.calendar = calendar;
(function (calendar) {
    calendar.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/posts/calendar",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    calendar.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/social/posts/calendar";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(calendar || (exports.calendar = calendar = {}));
async function create(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...create.METADATA,
        template: create.METADATA.path,
        path: create.path(),
    }, body);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/posts",
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
    create.path = () => "/shop/mkt-os/social/posts";
})(create || (exports.create = create = {}));
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
        path: "/shop/mkt-os/social/posts/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    get.path = (id) => `/shop/mkt-os/social/posts/${encodeURIComponent(id?.toString() ?? "null")}`;
})(get || (exports.get = get = {}));
async function update(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...update.METADATA,
        template: update.METADATA.path,
        path: update.path(id),
    }, body);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/social/posts/:id",
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
    update.path = (id) => `/shop/mkt-os/social/posts/${encodeURIComponent(id?.toString() ?? "null")}`;
})(update || (exports.update = update = {}));
//# sourceMappingURL=index.js.map