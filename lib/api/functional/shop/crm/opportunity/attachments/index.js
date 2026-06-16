"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.findAll = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAll(connection, opportunityId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAll.METADATA,
        template: findAll.METADATA.path,
        path: findAll.path(opportunityId),
    });
}
exports.findAll = findAll;
(function (findAll) {
    findAll.METADATA = {
        method: "GET",
        path: "/shop/crm/opportunity/:opportunity_id/attachments",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAll.path = (opportunityId) => `/shop/crm/opportunity/${encodeURIComponent(opportunityId?.toString() ?? "null")}/attachments`;
})(findAll || (exports.findAll = findAll = {}));
async function create(connection, opportunityId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...create.METADATA,
        template: create.METADATA.path,
        path: create.path(opportunityId),
    }, body);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/crm/opportunity/:opportunity_id/attachments",
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
    create.path = (opportunityId) => `/shop/crm/opportunity/${encodeURIComponent(opportunityId?.toString() ?? "null")}/attachments`;
})(create || (exports.create = create = {}));
//# sourceMappingURL=index.js.map