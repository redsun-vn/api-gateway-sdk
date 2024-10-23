"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTime = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updateTime(connection, data, id) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateTime.METADATA,
        template: updateTime.METADATA.path,
        path: updateTime.path(id),
    }, data);
}
exports.updateTime = updateTime;
(function (updateTime) {
    updateTime.METADATA = {
        method: "PUT",
        path: "/shop/hr/attendance/details/:id/time",
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
    updateTime.path = (id) => `/shop/hr/attendance/details/${encodeURIComponent(id?.toString() ?? "null")}/time`;
})(updateTime || (exports.updateTime = updateTime = {}));
//# sourceMappingURL=index.js.map