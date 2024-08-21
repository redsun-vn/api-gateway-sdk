"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VNPAYQRCodeIpnIpAddressNotAllowed = exports.VNPAYQRCodeIpnQrCodeExpired = exports.VNPAYQRCodeIpnTimeoutTransactions = exports.VNPAYQRCodeIpnIncorrectAmount = exports.VNPAYQRCodeIpnWrongAuthentication = exports.VNPAYQRCodeIpnOrderProcessing = exports.VNPAYQRCodeIpnErrorCreatingOrder = exports.VNPAYQRCodeIpnOrderPaid = exports.VNPAYQRCodeIpnOutOfStock = exports.VNPAYQRCodeIpnMissingItems = exports.VNPAYQRCodeIpnSuccess = void 0;
exports.VNPAYQRCodeIpnSuccess = {
    code: '00',
    message: 'Confirm Success',
};
exports.VNPAYQRCodeIpnMissingItems = {
    code: '01',
    message: 'Missing items in the order',
    data: [],
};
exports.VNPAYQRCodeIpnOutOfStock = {
    code: '02',
    message: 'All items in the order are out of stock',
};
exports.VNPAYQRCodeIpnOrderPaid = {
    code: '03',
    message: 'The order has been paid',
};
exports.VNPAYQRCodeIpnErrorCreatingOrder = {
    code: '04',
    message: 'Error creating order',
};
exports.VNPAYQRCodeIpnOrderProcessing = {
    code: '05',
    message: 'Order is being processed',
};
exports.VNPAYQRCodeIpnWrongAuthentication = {
    code: '06',
    message: 'wrong authentication information',
};
exports.VNPAYQRCodeIpnIncorrectAmount = {
    code: '07',
    message: 'Incorrect amount',
};
exports.VNPAYQRCodeIpnTimeoutTransactions = {
    code: '08',
    message: 'Timeout transactions',
};
exports.VNPAYQRCodeIpnQrCodeExpired = {
    code: '09',
    message: 'QR code has expired',
};
exports.VNPAYQRCodeIpnIpAddressNotAllowed = {
    code: '10',
    message: 'IP address is not allowed',
};
//# sourceMappingURL=ivnpay-qrcode.type.js.map