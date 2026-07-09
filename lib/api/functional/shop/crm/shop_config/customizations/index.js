"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCustomizations = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updateCustomizations(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateCustomizations.METADATA,
        template: updateCustomizations.METADATA.path,
        path: updateCustomizations.path(),
    }, body);
}
exports.updateCustomizations = updateCustomizations;
(function (updateCustomizations) {
    updateCustomizations.METADATA = {
        method: "PATCH",
        path: "/shop/crm/shop-config/customizations",
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
    updateCustomizations.path = () => "/shop/crm/shop-config/customizations";
})(updateCustomizations || (exports.updateCustomizations = updateCustomizations = {}));
//# sourceMappingURL=index.js.map