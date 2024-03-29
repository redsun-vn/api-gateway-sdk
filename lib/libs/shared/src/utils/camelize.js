"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelize = void 0;
function camelCase(str) {
    return str.replace(/[_.-](\w|$)/g, function (_, x) {
        return x.toUpperCase();
    });
}
function walk(obj, shallow = false) {
    if (!obj || typeof obj !== 'object')
        return obj;
    if (obj instanceof Date || obj instanceof RegExp)
        return obj;
    if (Array.isArray(obj))
        return obj.map((v) => {
            if (!shallow) {
                return walk(v);
            }
            if (typeof v === 'object')
                return walk(v, shallow);
            return v;
        });
    return Object.keys(obj).reduce((res, key) => {
        const camel = camelCase(key);
        const uncapitalized = camel.charAt(0).toLowerCase() + camel.slice(1);
        res[uncapitalized] = shallow ? obj[key] : walk(obj[key]);
        return res;
    }, {});
}
function camelize(obj, shallow) {
    return typeof obj === 'string' ? camelCase(obj) : walk(obj, shallow);
}
exports.camelize = camelize;
//# sourceMappingURL=camelize.js.map