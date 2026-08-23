"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findByStaff = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findByStaff(connection, staffId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findByStaff.METADATA,
        template: findByStaff.METADATA.path,
        path: findByStaff.path(staffId),
    });
}
exports.findByStaff = findByStaff;
(function (findByStaff) {
    findByStaff.METADATA = {
        method: "GET",
        path: "/shop/hr/staffs/:staffId/contracts",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findByStaff.path = (staffId) => `/shop/hr/staffs/${encodeURIComponent(staffId?.toString() ?? "null")}/contracts`;
})(findByStaff || (exports.findByStaff = findByStaff = {}));
//# sourceMappingURL=index.js.map