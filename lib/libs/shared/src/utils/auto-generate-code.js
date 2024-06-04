"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.autoGenerateCode = void 0;
const nanoid_1 = require("nanoid");
const autoGenerateCode = (prefix, shopId, customText = '', length = 7) => {
    const customTextNotWhiteSpace = customText.replaceAll(' ', '');
    const text = `${shopId}A0123456789BCDEFGHIJKLMNOPQRSTUVWXYZ${customTextNotWhiteSpace.replace(/[^\w\s]/gi, '')}`
        .substring(0, 250)
        .toUpperCase();
    const nanoid = (0, nanoid_1.customAlphabet)(text, length);
    const randomByte = nanoid();
    return `${prefix}${randomByte}`;
};
exports.autoGenerateCode = autoGenerateCode;
//# sourceMappingURL=auto-generate-code.js.map