"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findAll = exports.deleteWarehouse = exports.getWarehouse = exports.updateWarehouse = exports.createWarehouse = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createWarehouse(connection, createWarehouseDto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createWarehouse.METADATA,
        template: createWarehouse.METADATA.path,
        path: createWarehouse.path(),
    }, createWarehouseDto);
}
exports.createWarehouse = createWarehouse;
(function (createWarehouse) {
    createWarehouse.METADATA = {
        method: "POST",
        path: "/admin/warehouses",
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
    createWarehouse.path = () => "/admin/warehouses";
})(createWarehouse || (exports.createWarehouse = createWarehouse = {}));
async function updateWarehouse(connection, warehouseId, updateWarehouseDto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateWarehouse.METADATA,
        template: updateWarehouse.METADATA.path,
        path: updateWarehouse.path(warehouseId),
    }, updateWarehouseDto);
}
exports.updateWarehouse = updateWarehouse;
(function (updateWarehouse) {
    updateWarehouse.METADATA = {
        method: "PUT",
        path: "/admin/warehouses/:warehouseId",
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
    updateWarehouse.path = (warehouseId) => `/admin/warehouses/${encodeURIComponent(warehouseId?.toString() ?? "null")}`;
})(updateWarehouse || (exports.updateWarehouse = updateWarehouse = {}));
async function getWarehouse(connection, warehouseId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getWarehouse.METADATA,
        template: getWarehouse.METADATA.path,
        path: getWarehouse.path(warehouseId),
    });
}
exports.getWarehouse = getWarehouse;
(function (getWarehouse) {
    getWarehouse.METADATA = {
        method: "GET",
        path: "/admin/warehouses/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getWarehouse.path = (warehouseId) => `/admin/warehouses/${encodeURIComponent(warehouseId?.toString() ?? "null")}`;
})(getWarehouse || (exports.getWarehouse = getWarehouse = {}));
async function deleteWarehouse(connection, warehouseId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteWarehouse.METADATA,
        template: deleteWarehouse.METADATA.path,
        path: deleteWarehouse.path(warehouseId),
    });
}
exports.deleteWarehouse = deleteWarehouse;
(function (deleteWarehouse) {
    deleteWarehouse.METADATA = {
        method: "DELETE",
        path: "/admin/warehouses/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteWarehouse.path = (warehouseId) => `/admin/warehouses/${encodeURIComponent(warehouseId?.toString() ?? "null")}`;
})(deleteWarehouse || (exports.deleteWarehouse = deleteWarehouse = {}));
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
        path: "/admin/warehouses",
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
        const location = "/admin/warehouses";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAll || (exports.findAll = findAll = {}));
//# sourceMappingURL=index.js.map