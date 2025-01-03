"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getOrder = exports.updateOrder = exports.createOrder = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createOrder(connection, createOrderDto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createOrder.METADATA,
        template: createOrder.METADATA.path,
        path: createOrder.path(),
    }, createOrderDto);
}
exports.createOrder = createOrder;
(function (createOrder) {
    createOrder.METADATA = {
        method: "POST",
        path: "/shop/tomotek-order",
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
    createOrder.path = () => "/shop/tomotek-order";
})(createOrder || (exports.createOrder = createOrder = {}));
async function updateOrder(connection, shopId, updateOrderDto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateOrder.METADATA,
        template: updateOrder.METADATA.path,
        path: updateOrder.path(shopId),
    }, updateOrderDto);
}
exports.updateOrder = updateOrder;
(function (updateOrder) {
    updateOrder.METADATA = {
        method: "PUT",
        path: "/shop/tomotek-order/:shopId",
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
    updateOrder.path = (shopId) => `/shop/tomotek-order/${encodeURIComponent(shopId?.toString() ?? "null")}`;
})(updateOrder || (exports.updateOrder = updateOrder = {}));
async function getOrder(connection, shopId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getOrder.METADATA,
        template: getOrder.METADATA.path,
        path: getOrder.path(shopId),
    });
}
exports.getOrder = getOrder;
(function (getOrder) {
    getOrder.METADATA = {
        method: "GET",
        path: "/shop/tomotek-order/:shopId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getOrder.path = (shopId) => `/shop/tomotek-order/${encodeURIComponent(shopId?.toString() ?? "null")}`;
})(getOrder || (exports.getOrder = getOrder = {}));
//# sourceMappingURL=index.js.map