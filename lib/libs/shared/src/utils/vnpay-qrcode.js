"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isValidVnpayQRCodeDateFormat = void 0;
function isValidVnpayQRCodeDateFormat(dtStr) {
    const regex = /^(?:\d{2})(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])(0[0-9]|1[0-9]|2[0-3])(0[0-9]|[1-5][0-9])$/;
    return regex.test(dtStr);
}
exports.isValidVnpayQRCodeDateFormat = isValidVnpayQRCodeDateFormat;
//# sourceMappingURL=vnpay-qrcode.js.map