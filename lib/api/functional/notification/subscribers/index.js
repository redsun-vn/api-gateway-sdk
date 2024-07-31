"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSubscriber = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createSubscriber(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createSubscriber.METADATA,
        path: createSubscriber.path(),
    }, input);
}
exports.createSubscriber = createSubscriber;
(function (createSubscriber) {
    createSubscriber.METADATA = {
        method: "POST",
        path: "/notification/subscribers",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: null,
    };
    createSubscriber.path = () => "/notification/subscribers";
})(createSubscriber || (exports.createSubscriber = createSubscriber = {}));
//# sourceMappingURL=index.js.map