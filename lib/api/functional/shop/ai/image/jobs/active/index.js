"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActiveJobs = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getActiveJobs(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getActiveJobs.METADATA,
        template: getActiveJobs.METADATA.path,
        path: getActiveJobs.path(),
    });
}
exports.getActiveJobs = getActiveJobs;
(function (getActiveJobs) {
    getActiveJobs.METADATA = {
        method: "GET",
        path: "/shop/ai/image/jobs/active",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getActiveJobs.path = () => "/shop/ai/image/jobs/active";
})(getActiveJobs || (exports.getActiveJobs = getActiveJobs = {}));
//# sourceMappingURL=index.js.map