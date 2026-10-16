"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createSpace = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createSpace(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createSpace.METADATA,
        template: createSpace.METADATA.path,
        path: createSpace.path(),
    }, input);
}
exports.createSpace = createSpace;
(function (createSpace) {
    createSpace.METADATA = {
        method: "POST",
        path: "/attachments/admin/spaces",
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
    createSpace.path = () => "/attachments/admin/spaces";
})(createSpace || (exports.createSpace = createSpace = {}));
//# sourceMappingURL=index.js.map