"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePwd = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updatePwd(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updatePwd.METADATA,
        template: updatePwd.METADATA.path,
        path: updatePwd.path(),
    }, data);
}
exports.updatePwd = updatePwd;
(function (updatePwd) {
    updatePwd.METADATA = {
        method: "PUT",
        path: "/shop/staff/password",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    updatePwd.path = () => "/shop/staff/password";
})(updatePwd || (exports.updatePwd = updatePwd = {}));
//# sourceMappingURL=index.js.map