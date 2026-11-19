"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.slaDue = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function slaDue(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...slaDue.METADATA,
        template: slaDue.METADATA.path,
        path: slaDue.path(query),
    });
}
exports.slaDue = slaDue;
(function (slaDue) {
    slaDue.METADATA = {
        method: "GET",
        path: "/shop/crm/leads/sla-due",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    slaDue.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/leads/sla-due";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(slaDue || (exports.slaDue = slaDue = {}));
//# sourceMappingURL=index.js.map