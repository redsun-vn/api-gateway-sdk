"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.kanbanScoped = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function kanbanScoped(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...kanbanScoped.METADATA,
        template: kanbanScoped.METADATA.path,
        path: kanbanScoped.path(query),
    });
}
exports.kanbanScoped = kanbanScoped;
(function (kanbanScoped) {
    kanbanScoped.METADATA = {
        method: "GET",
        path: "/shop/crm/opportunities/kanban/scoped",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    kanbanScoped.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/crm/opportunities/kanban/scoped";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(kanbanScoped || (exports.kanbanScoped = kanbanScoped = {}));
//# sourceMappingURL=index.js.map