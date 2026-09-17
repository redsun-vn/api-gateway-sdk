"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByEmail = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findByEmail(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findByEmail.METADATA,
        template: findByEmail.METADATA.path,
        path: findByEmail.path(query),
    });
}
exports.findByEmail = findByEmail;
(function (findByEmail) {
    findByEmail.METADATA = {
        method: "GET",
        path: "/shop/staffs/by-email",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findByEmail.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/staffs/by-email";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findByEmail || (exports.findByEmail = findByEmail = {}));
//# sourceMappingURL=index.js.map