"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateLoyaltyPrograms = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function validateLoyaltyPrograms(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...validateLoyaltyPrograms.METADATA,
        template: validateLoyaltyPrograms.METADATA.path,
        path: validateLoyaltyPrograms.path(),
    }, body);
}
exports.validateLoyaltyPrograms = validateLoyaltyPrograms;
(function (validateLoyaltyPrograms) {
    validateLoyaltyPrograms.METADATA = {
        method: "POST",
        path: "/shop/sale-orders/loyalty-programs/validate",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    validateLoyaltyPrograms.path = () => "/shop/sale-orders/loyalty-programs/validate";
})(validateLoyaltyPrograms || (exports.validateLoyaltyPrograms = validateLoyaltyPrograms = {}));
//# sourceMappingURL=index.js.map