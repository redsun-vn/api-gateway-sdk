"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.create = exports.getAll = exports.getConfig = exports.updateConfig = exports.createConfig = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createConfig(connection, createConfigDto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createConfig.METADATA,
        template: createConfig.METADATA.path,
        path: createConfig.path(),
    }, createConfigDto);
}
exports.createConfig = createConfig;
(function (createConfig) {
    createConfig.METADATA = {
        method: "POST",
        path: "/shop/tomotek-config",
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
    createConfig.path = () => "/shop/tomotek-config";
})(createConfig || (exports.createConfig = createConfig = {}));
async function updateConfig(connection, shopId, updateConfigDto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateConfig.METADATA,
        template: updateConfig.METADATA.path,
        path: updateConfig.path(shopId),
    }, updateConfigDto);
}
exports.updateConfig = updateConfig;
(function (updateConfig) {
    updateConfig.METADATA = {
        method: "PUT",
        path: "/shop/tomotek-config/:shopId",
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
    updateConfig.path = (shopId) => `/shop/tomotek-config/${encodeURIComponent(shopId?.toString() ?? "null")}`;
})(updateConfig || (exports.updateConfig = updateConfig = {}));
async function getConfig(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getConfig.METADATA,
        template: getConfig.METADATA.path,
        path: getConfig.path(id),
    });
}
exports.getConfig = getConfig;
(function (getConfig) {
    getConfig.METADATA = {
        method: "GET",
        path: "/shop/tomotek-config/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getConfig.path = (id) => `/shop/tomotek-config/${encodeURIComponent(id?.toString() ?? "null")}`;
})(getConfig || (exports.getConfig = getConfig = {}));
async function getAll(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getAll.METADATA,
        template: getAll.METADATA.path,
        path: getAll.path(),
    });
}
exports.getAll = getAll;
(function (getAll) {
    getAll.METADATA = {
        method: "GET",
        path: "/shop/tomotek-config",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getAll.path = () => "/shop/tomotek-config";
})(getAll || (exports.getAll = getAll = {}));
async function create(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...create.METADATA,
        template: create.METADATA.path,
        path: create.path(id),
    });
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "DELETE",
        path: "/shop/tomotek-config/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    create.path = (id) => `/shop/tomotek-config/${encodeURIComponent(id?.toString() ?? "null")}`;
})(create || (exports.create = create = {}));
//# sourceMappingURL=index.js.map