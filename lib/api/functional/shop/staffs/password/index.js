"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setPassword = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function setPassword(connection, input, id) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...setPassword.METADATA,
        template: setPassword.METADATA.path,
        path: setPassword.path(id),
    }, input);
}
exports.setPassword = setPassword;
(function (setPassword) {
    setPassword.METADATA = {
        method: "PUT",
        path: "/shop/staffs/:id/password",
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
    setPassword.path = (id) => `/shop/staffs/${encodeURIComponent(id?.toString() ?? "null")}/password`;
})(setPassword || (exports.setPassword = setPassword = {}));
//# sourceMappingURL=index.js.map