"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeyCacheUserDeviceByShop = exports.getKeyCacheStaffByShop = exports.parseToken = void 0;
const parseToken = (token) => {
    if (!token || typeof token !== 'string') {
        return null;
    }
    const parts = token.split('.');
    if (parts.length !== 3 || !parts[1]) {
        return null;
    }
    try {
        return JSON.parse(Buffer.from(parts[1], 'base64').toString());
    }
    catch (error) {
        return null;
    }
};
exports.parseToken = parseToken;
const getKeyCacheStaffByShop = (staffId, shopId) => {
    return `cache:StaffByShop:${shopId}:${staffId}`;
};
exports.getKeyCacheStaffByShop = getKeyCacheStaffByShop;
const getKeyCacheUserDeviceByShop = (shopId, staffId) => {
    return `cache:UserDeviceByShop:${shopId}:${staffId}`;
};
exports.getKeyCacheUserDeviceByShop = getKeyCacheUserDeviceByShop;
//# sourceMappingURL=parseToken.js.map