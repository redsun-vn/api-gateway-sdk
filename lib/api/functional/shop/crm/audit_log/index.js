"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByEntity = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findByEntity(connection, entityType, entityId, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findByEntity.METADATA,
        template: findByEntity.METADATA.path,
        path: findByEntity.path(entityType, entityId, query),
    });
}
exports.findByEntity = findByEntity;
(function (findByEntity) {
    findByEntity.METADATA = {
        method: "GET",
        path: "/shop/crm/audit-log/:entityType/:entityId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findByEntity.path = (entityType, entityId, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/crm/audit-log/${encodeURIComponent(entityType?.toString() ?? "null")}/${encodeURIComponent(entityId?.toString() ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findByEntity || (exports.findByEntity = findByEntity = {}));
//# sourceMappingURL=index.js.map