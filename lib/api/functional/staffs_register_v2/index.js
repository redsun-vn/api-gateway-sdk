"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffRegisterV2 = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function staffRegisterV2(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...staffRegisterV2.METADATA,
        template: staffRegisterV2.METADATA.path,
        path: staffRegisterV2.path(),
    }, data);
}
exports.staffRegisterV2 = staffRegisterV2;
(function (staffRegisterV2) {
    staffRegisterV2.METADATA = {
        method: "POST",
        path: "/staffs-register-v2",
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
    staffRegisterV2.path = () => "/staffs-register-v2";
})(staffRegisterV2 || (exports.staffRegisterV2 = staffRegisterV2 = {}));
//# sourceMappingURL=index.js.map