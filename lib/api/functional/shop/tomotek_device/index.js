"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.$delete = exports.getDevice = exports.updateDevice = exports.createDevice = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createDevice(connection, createDeviceDto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createDevice.METADATA,
        template: createDevice.METADATA.path,
        path: createDevice.path(),
    }, createDeviceDto);
}
exports.createDevice = createDevice;
(function (createDevice) {
    createDevice.METADATA = {
        method: "POST",
        path: "/shop/tomotek-device",
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
    createDevice.path = () => "/shop/tomotek-device";
})(createDevice || (exports.createDevice = createDevice = {}));
async function updateDevice(connection, shopId, updateDeviceDto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateDevice.METADATA,
        template: updateDevice.METADATA.path,
        path: updateDevice.path(shopId),
    }, updateDeviceDto);
}
exports.updateDevice = updateDevice;
(function (updateDevice) {
    updateDevice.METADATA = {
        method: "PUT",
        path: "/shop/tomotek-device/:shopId",
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
    updateDevice.path = (shopId) => `/shop/tomotek-device/${encodeURIComponent(shopId?.toString() ?? "null")}`;
})(updateDevice || (exports.updateDevice = updateDevice = {}));
async function getDevice(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getDevice.METADATA,
        template: getDevice.METADATA.path,
        path: getDevice.path(id),
    });
}
exports.getDevice = getDevice;
(function (getDevice) {
    getDevice.METADATA = {
        method: "GET",
        path: "/shop/tomotek-device/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getDevice.path = (id) => `/shop/tomotek-device/${encodeURIComponent(id?.toString() ?? "null")}`;
})(getDevice || (exports.getDevice = getDevice = {}));
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
        path: "/shop/tomotek-device/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    $delete.path = (id) => `/shop/tomotek-device/${encodeURIComponent(id?.toString() ?? "null")}`;
})($delete || (exports.$delete = $delete = {}));
//# sourceMappingURL=index.js.map