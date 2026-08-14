"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.importStaffs = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function importStaffs(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...importStaffs.METADATA,
        template: importStaffs.METADATA.path,
        path: importStaffs.path(),
    }, body);
}
exports.importStaffs = importStaffs;
(function (importStaffs) {
    importStaffs.METADATA = {
        method: "POST",
        path: "/shop/staffs/import",
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
    importStaffs.path = () => "/shop/staffs/import";
})(importStaffs || (exports.importStaffs = importStaffs = {}));
//# sourceMappingURL=index.js.map