"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInventoryMovement = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getInventoryMovement(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getInventoryMovement.METADATA,
        template: getInventoryMovement.METADATA.path,
        path: getInventoryMovement.path(query),
    });
}
exports.getInventoryMovement = getInventoryMovement;
(function (getInventoryMovement) {
    getInventoryMovement.METADATA = {
        method: "GET",
        path: "/shop/inventory/report/movement",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getInventoryMovement.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/inventory/report/movement";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getInventoryMovement || (exports.getInventoryMovement = getInventoryMovement = {}));
//# sourceMappingURL=index.js.map