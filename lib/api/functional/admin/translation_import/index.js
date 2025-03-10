"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uploadFile = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function uploadFile(connection, body, query) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...uploadFile.METADATA,
        template: uploadFile.METADATA.path,
        path: uploadFile.path(query),
    }, body);
}
exports.uploadFile = uploadFile;
(function (uploadFile) {
    uploadFile.METADATA = {
        method: "POST",
        path: "/admin/translation-import",
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
    uploadFile.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/admin/translation-import";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(uploadFile || (exports.uploadFile = uploadFile = {}));
//# sourceMappingURL=index.js.map