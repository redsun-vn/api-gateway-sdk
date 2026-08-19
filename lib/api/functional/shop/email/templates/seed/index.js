"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.seedTemplates = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function seedTemplates(connection, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...seedTemplates.METADATA,
        template: seedTemplates.METADATA.path,
        path: seedTemplates.path(),
    }, dto);
}
exports.seedTemplates = seedTemplates;
(function (seedTemplates) {
    seedTemplates.METADATA = {
        method: "POST",
        path: "/shop/email/templates/seed",
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
    seedTemplates.path = () => "/shop/email/templates/seed";
})(seedTemplates || (exports.seedTemplates = seedTemplates = {}));
//# sourceMappingURL=index.js.map