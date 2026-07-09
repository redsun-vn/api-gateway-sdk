"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.find = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function find(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...find.METADATA,
        template: find.METADATA.path,
        path: find.path(),
    });
}
exports.find = find;
(function (find) {
    find.METADATA = {
        method: "GET",
        path: "/shop/crm/notification-preferences",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    find.path = () => "/shop/crm/notification-preferences";
})(find || (exports.find = find = {}));
async function update(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...update.METADATA,
        template: update.METADATA.path,
        path: update.path(),
    }, body);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/shop/crm/notification-preferences",
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
    update.path = () => "/shop/crm/notification-preferences";
})(update || (exports.update = update = {}));
//# sourceMappingURL=index.js.map