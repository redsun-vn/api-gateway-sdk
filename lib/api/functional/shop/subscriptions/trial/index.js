"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTrial = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createTrial(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createTrial.METADATA,
        template: createTrial.METADATA.path,
        path: createTrial.path(),
    }, data);
}
exports.createTrial = createTrial;
(function (createTrial) {
    createTrial.METADATA = {
        method: "POST",
        path: "/shop/subscriptions/trial",
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
    createTrial.path = () => "/shop/subscriptions/trial";
})(createTrial || (exports.createTrial = createTrial = {}));
//# sourceMappingURL=index.js.map