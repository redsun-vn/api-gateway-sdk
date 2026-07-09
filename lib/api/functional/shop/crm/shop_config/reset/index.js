"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetCustomizations = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function resetCustomizations(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...resetCustomizations.METADATA,
        template: resetCustomizations.METADATA.path,
        path: resetCustomizations.path(),
    });
}
exports.resetCustomizations = resetCustomizations;
(function (resetCustomizations) {
    resetCustomizations.METADATA = {
        method: "POST",
        path: "/shop/crm/shop-config/reset",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    resetCustomizations.path = () => "/shop/crm/shop-config/reset";
})(resetCustomizations || (exports.resetCustomizations = resetCustomizations = {}));
//# sourceMappingURL=index.js.map