"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringifyQueryParams = void 0;
function stringifyQueryParams(params) {
    return new URLSearchParams(Object.entries(params).filter((param) => {
        const [, value] = param;
        if (typeof value === 'undefined' || value === null) {
            return false;
        }
        if (typeof value === 'string' && value.length === 0) {
            return false;
        }
        if (Array.isArray(value) && value.length === 0) {
            return false;
        }
        return true;
    })).toString();
}
exports.stringifyQueryParams = stringifyQueryParams;
//# sourceMappingURL=stringifyQueryParams.js.map