"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pipelineHealth = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function pipelineHealth(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...pipelineHealth.METADATA,
        template: pipelineHealth.METADATA.path,
        path: pipelineHealth.path(query),
    });
}
exports.pipelineHealth = pipelineHealth;
(function (pipelineHealth) {
    pipelineHealth.METADATA = {
        method: "GET",
        path: "/shop/crm/dashboard/pipeline-health",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    pipelineHealth.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/dashboard/pipeline-health";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(pipelineHealth || (exports.pipelineHealth = pipelineHealth = {}));
//# sourceMappingURL=index.js.map