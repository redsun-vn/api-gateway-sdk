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
        status: null,
    };
    findOne.path = (code) => `/payment-links/${encodeURIComponent(code ?? "null")}`;
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
        status: null,
    };
    updatePayment.path = (code) => `/payment-links/${encodeURIComponent(code ?? "null")}`;
})(updatePayment || (exports.updatePayment = updatePayment = {}));
//# sourceMappingURL=index.js.map