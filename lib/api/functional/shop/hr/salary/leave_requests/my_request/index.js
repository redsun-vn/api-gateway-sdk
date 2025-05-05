"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMyRequest = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createMyRequest(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createMyRequest.METADATA,
        template: createMyRequest.METADATA.path,
        path: createMyRequest.path(),
    }, data);
}
exports.createMyRequest = createMyRequest;
(function (createMyRequest) {
    createMyRequest.METADATA = {
        method: "POST",
        path: "/shop/hr/salary/leave-requests/my-request",
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
    createMyRequest.path = () => "/shop/hr/salary/leave-requests/my-request";
})(createMyRequest || (exports.createMyRequest = createMyRequest = {}));
//# sourceMappingURL=index.js.map