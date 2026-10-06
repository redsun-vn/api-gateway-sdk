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
exports.review = exports.duplicate = exports.update = exports.create = exports.$delete = exports.findOne = exports.findAll = exports.logs = exports.stop = exports.publish = exports.submit = exports.reindex = exports.approve = exports.pricing = exports.discard = exports.draft = exports.$return = exports.download_counts = exports.prices = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.prices = __importStar(require("./prices"));
exports.download_counts = __importStar(require("./download_counts"));
exports.$return = __importStar(require("./$return"));
exports.draft = __importStar(require("./draft"));
exports.discard = __importStar(require("./discard"));
exports.pricing = __importStar(require("./pricing"));
async function approve(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...approve.METADATA,
        template: approve.METADATA.path,
        path: approve.path(),
    }, body);
}
exports.approve = approve;
(function (approve) {
    approve.METADATA = {
        method: "POST",
        path: "/admin/cms/themes/approve",
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
    approve.path = () => "/admin/cms/themes/approve";
})(approve || (exports.approve = approve = {}));
async function reindex(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...reindex.METADATA,
        template: reindex.METADATA.path,
        path: reindex.path(),
    }, body);
}
exports.reindex = reindex;
(function (reindex) {
    reindex.METADATA = {
        method: "POST",
        path: "/admin/cms/themes/reindex",
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
    reindex.path = () => "/admin/cms/themes/reindex";
})(reindex || (exports.reindex = reindex = {}));
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
        path: "/admin/cms/themes/:id/submit",
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
    submit.path = (id) => `/admin/cms/themes/${encodeURIComponent(id?.toString() ?? "null")}/submit`;
})(submit || (exports.submit = submit = {}));
async function publish(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...publish.METADATA,
        template: publish.METADATA.path,
        path: publish.path(id),
    });
}
exports.publish = publish;
(function (publish) {
    publish.METADATA = {
        method: "POST",
        path: "/admin/cms/themes/:id/publish",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    publish.path = (id) => `/admin/cms/themes/${encodeURIComponent(id?.toString() ?? "null")}/publish`;
})(publish || (exports.publish = publish = {}));
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
        path: "/admin/cms/themes/:id/stop",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    stop.path = (id) => `/admin/cms/themes/${encodeURIComponent(id?.toString() ?? "null")}/stop`;
})(stop || (exports.stop = stop = {}));
async function logs(connection, id, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...logs.METADATA,
        template: logs.METADATA.path,
        path: logs.path(id, query),
    });
}
exports.logs = logs;
(function (logs) {
    logs.METADATA = {
        method: "GET",
        path: "/admin/cms/themes/:id/logs",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    logs.path = (id, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/admin/cms/themes/${encodeURIComponent(id?.toString() ?? "null")}/logs`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(logs || (exports.logs = logs = {}));
async function findAll(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAll.METADATA,
        template: findAll.METADATA.path,
        path: findAll.path(query),
    });
}
exports.findAll = findAll;
(function (findAll) {
    findAll.METADATA = {
        method: "GET",
        path: "/admin/cms/themes",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAll.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/cms/themes";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAll || (exports.findAll = findAll = {}));
async function findOne(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOne.METADATA,
        template: findOne.METADATA.path,
        path: findOne.path(id),
    });
}
exports.findOne = findOne;
(function (findOne) {
    findOne.METADATA = {
        method: "GET",
        path: "/admin/cms/themes/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (id) => `/admin/cms/themes/${encodeURIComponent(id?.toString() ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
async function $delete(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...$delete.METADATA,
        template: $delete.METADATA.path,
        path: $delete.path(id),
    });
}
exports.$delete = $delete;
(function ($delete) {
    $delete.METADATA = {
        method: "DELETE",
        path: "/admin/cms/themes/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    $delete.path = (id) => `/admin/cms/themes/${encodeURIComponent(id?.toString() ?? "null")}`;
})($delete || (exports.$delete = $delete = {}));
async function create(connection, data) {
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
    }, data);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/admin/cms/themes",
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
    create.path = () => "/admin/cms/themes";
})(create || (exports.create = create = {}));
async function update(connection, data, id) {
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
    }, data);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/admin/cms/themes/:id",
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
    update.path = (id) => `/admin/cms/themes/${encodeURIComponent(id?.toString() ?? "null")}`;
})(update || (exports.update = update = {}));
async function duplicate(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...duplicate.METADATA,
        template: duplicate.METADATA.path,
        path: duplicate.path(),
    }, data);
}
exports.duplicate = duplicate;
(function (duplicate) {
    duplicate.METADATA = {
        method: "POST",
        path: "/admin/cms/themes/duplicate",
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
    duplicate.path = () => "/admin/cms/themes/duplicate";
})(duplicate || (exports.duplicate = duplicate = {}));
async function review(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...review.METADATA,
        template: review.METADATA.path,
        path: review.path(),
    }, data);
}
exports.review = review;
(function (review) {
    review.METADATA = {
        method: "POST",
        path: "/admin/cms/themes/review",
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
    review.path = () => "/admin/cms/themes/review";
})(review || (exports.review = review = {}));
//# sourceMappingURL=index.js.map