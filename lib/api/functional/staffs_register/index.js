"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.staffRegister = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function staffRegister(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...staffRegister.METADATA,
        template: staffRegister.METADATA.path,
        path: staffRegister.path(),
    }, data);
}
exports.staffRegister = staffRegister;
(function (staffRegister) {
    staffRegister.METADATA = {
        method: "POST",
        path: "/staffs-register",
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
    staffRegister.path = () => "/staffs-register";
})(staffRegister || (exports.staffRegister = staffRegister = {}));
//# sourceMappingURL=index.js.map