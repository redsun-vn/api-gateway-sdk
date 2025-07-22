"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWinning = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findWinning(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findWinning.METADATA,
        template: findWinning.METADATA.path,
        path: findWinning.path(),
    });
}
exports.findWinning = findWinning;
(function (findWinning) {
    findWinning.METADATA = {
        method: "GET",
        path: "/admin/crm/stages/winning",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findWinning.path = () => "/admin/crm/stages/winning";
})(findWinning || (exports.findWinning = findWinning = {}));
//# sourceMappingURL=index.js.map