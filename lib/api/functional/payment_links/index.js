"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePayment = exports.findOne = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findOne(connection, code) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOne.METADATA,
        template: findOne.METADATA.path,
        path: findOne.path(code),
    });
}
exports.findOne = findOne;
(function (findOne) {
    findOne.METADATA = {
        method: "GET",
        path: "/payment-links/:code",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOne.path = (code) => `/payment-links/${encodeURIComponent(code?.toString() ?? "null")}`;
})(findOne || (exports.findOne = findOne = {}));
async function updatePayment(connection, code) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...updatePayment.METADATA,
        template: updatePayment.METADATA.path,
        path: updatePayment.path(code),
    });
}
exports.updatePayment = updatePayment;
(function (updatePayment) {
    updatePayment.METADATA = {
        method: "PUT",
        path: "/payment-links/:code",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    updatePayment.path = (code) => `/payment-links/${encodeURIComponent(code?.toString() ?? "null")}`;
})(updatePayment || (exports.updatePayment = updatePayment = {}));
//# sourceMappingURL=index.js.map