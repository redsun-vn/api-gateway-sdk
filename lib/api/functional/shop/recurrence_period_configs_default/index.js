"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createDefault = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createDefault(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...createDefault.METADATA,
        template: createDefault.METADATA.path,
        path: createDefault.path(),
    });
}
exports.createDefault = createDefault;
(function (createDefault) {
    createDefault.METADATA = {
        method: "POST",
        path: "/shop/recurrence-period-configs-default",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    createDefault.path = () => "/shop/recurrence-period-configs-default";
})(createDefault || (exports.createDefault = createDefault = {}));
//# sourceMappingURL=index.js.map