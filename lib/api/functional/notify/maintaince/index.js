"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNotifyMaintance = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findNotifyMaintance(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findNotifyMaintance.METADATA,
        path: findNotifyMaintance.path(),
    });
}
exports.findNotifyMaintance = findNotifyMaintance;
(function (findNotifyMaintance) {
    findNotifyMaintance.METADATA = {
        method: "GET",
        path: "/notify/maintaince",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    findNotifyMaintance.path = () => "/notify/maintaince";
})(findNotifyMaintance || (exports.findNotifyMaintance = findNotifyMaintance = {}));
//# sourceMappingURL=index.js.map