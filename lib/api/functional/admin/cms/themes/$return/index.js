"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnThemes = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function returnThemes(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...returnThemes.METADATA,
        template: returnThemes.METADATA.path,
        path: returnThemes.path(),
    }, body);
}
exports.returnThemes = returnThemes;
(function (returnThemes) {
    returnThemes.METADATA = {
        method: "POST",
        path: "/admin/cms/themes/return",
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
    returnThemes.path = () => "/admin/cms/themes/return";
})(returnThemes || (exports.returnThemes = returnThemes = {}));
//# sourceMappingURL=index.js.map