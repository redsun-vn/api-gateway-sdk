"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initialize = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function initialize(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...initialize.METADATA,
        template: initialize.METADATA.path,
        path: initialize.path(),
    }, data);
}
exports.initialize = initialize;
(function (initialize) {
    initialize.METADATA = {
        method: "POST",
        path: "/shop/rating-criteria-templates-initialize",
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
    initialize.path = () => "/shop/rating-criteria-templates-initialize";
})(initialize || (exports.initialize = initialize = {}));
//# sourceMappingURL=index.js.map