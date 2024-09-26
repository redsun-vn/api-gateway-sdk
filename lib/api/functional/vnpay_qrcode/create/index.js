"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createQRCode = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createQRCode(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createQRCode.METADATA,
        template: createQRCode.METADATA.path,
        path: createQRCode.path(),
    }, data);
}
exports.createQRCode = createQRCode;
(function (createQRCode) {
    createQRCode.METADATA = {
        method: "POST",
        path: "/vnpay-qrcode/create",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    createQRCode.path = () => "/vnpay-qrcode/create";
})(createQRCode || (exports.createQRCode = createQRCode = {}));
//# sourceMappingURL=index.js.map