"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseToken = void 0;
const parseToken = (token) => {
    const parts = token.split('.');
    return JSON.parse(Buffer.from(parts[1], 'base64').toString());
};
exports.parseToken = parseToken;
//# sourceMappingURL=parseToken.js.map