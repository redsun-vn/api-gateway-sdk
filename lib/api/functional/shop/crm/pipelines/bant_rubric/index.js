"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bantRubricUpdate = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function bantRubricUpdate(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...bantRubricUpdate.METADATA,
        template: bantRubricUpdate.METADATA.path,
        path: bantRubricUpdate.path(),
    }, body);
}
exports.bantRubricUpdate = bantRubricUpdate;
(function (bantRubricUpdate) {
    bantRubricUpdate.METADATA = {
        method: "PUT",
        path: "/shop/crm/pipelines/bant-rubric",
        request: {
            type: "application/json",
            encrypted: false,
        },
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    bantRubricUpdate.path = () => "/shop/crm/pipelines/bant-rubric";
})(bantRubricUpdate || (exports.bantRubricUpdate = bantRubricUpdate = {}));
//# sourceMappingURL=index.js.map