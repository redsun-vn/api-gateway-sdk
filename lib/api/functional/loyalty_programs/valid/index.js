"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validCode = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function validCode(connection, code, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...validCode.METADATA,
        template: validCode.METADATA.path,
        path: validCode.path(code, query),
    });
}
exports.validCode = validCode;
(function (validCode) {
    validCode.METADATA = {
        method: "GET",
        path: "/loyalty-programs/:code/valid",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    validCode.path = (code, query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/loyalty-programs/${encodeURIComponent(code?.toString() ?? "null")}/valid`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(validCode || (exports.validCode = validCode = {}));
//# sourceMappingURL=index.js.map