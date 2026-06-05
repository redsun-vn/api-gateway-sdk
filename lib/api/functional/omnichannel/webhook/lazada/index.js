"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.webhookFromLazada = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function webhookFromLazada(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...webhookFromLazada.METADATA,
        template: webhookFromLazada.METADATA.path,
        path: webhookFromLazada.path(),
    });
}
exports.webhookFromLazada = webhookFromLazada;
(function (webhookFromLazada) {
    webhookFromLazada.METADATA = {
        method: "POST",
        path: "/omnichannel/webhook/lazada",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    webhookFromLazada.path = () => "/omnichannel/webhook/lazada";
})(webhookFromLazada || (exports.webhookFromLazada = webhookFromLazada = {}));
//# sourceMappingURL=index.js.map