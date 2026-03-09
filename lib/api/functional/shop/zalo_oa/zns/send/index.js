"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendZNSTemplate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function sendZNSTemplate(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...sendZNSTemplate.METADATA,
        template: sendZNSTemplate.METADATA.path,
        path: sendZNSTemplate.path(),
    }, input);
}
exports.sendZNSTemplate = sendZNSTemplate;
(function (sendZNSTemplate) {
    sendZNSTemplate.METADATA = {
        method: "POST",
        path: "/shop/zalo-oa/zns/send",
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
    sendZNSTemplate.path = () => "/shop/zalo-oa/zns/send";
})(sendZNSTemplate || (exports.sendZNSTemplate = sendZNSTemplate = {}));
//# sourceMappingURL=index.js.map