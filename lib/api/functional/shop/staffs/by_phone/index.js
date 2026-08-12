"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByPhone = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findByPhone(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findByPhone.METADATA,
        template: findByPhone.METADATA.path,
        path: findByPhone.path(query),
    });
}
exports.findByPhone = findByPhone;
(function (findByPhone) {
    findByPhone.METADATA = {
        method: "GET",
        path: "/shop/staffs/by-phone",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findByPhone.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/staffs/by-phone";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findByPhone || (exports.findByPhone = findByPhone = {}));
//# sourceMappingURL=index.js.map