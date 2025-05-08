"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findOneByStaffId = exports.findAll = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAll(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAll.METADATA,
        template: findAll.METADATA.path,
        path: findAll.path(query),
    });
}
exports.findAll = findAll;
(function (findAll) {
    findAll.METADATA = {
        method: "GET",
        path: "/shop/hr/salary/leave-summaries",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAll.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/hr/salary/leave-summaries";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAll || (exports.findAll = findAll = {}));
async function findOneByStaffId(connection, staffId, data) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findOneByStaffId.METADATA,
        template: findOneByStaffId.METADATA.path,
        path: findOneByStaffId.path(staffId, data),
    });
}
exports.findOneByStaffId = findOneByStaffId;
(function (findOneByStaffId) {
    findOneByStaffId.METADATA = {
        method: "GET",
        path: "/shop/hr/salary/leave-summaries/:staffId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findOneByStaffId.path = (staffId, data) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(data))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/hr/salary/leave-summaries/${encodeURIComponent(staffId?.toString() ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findOneByStaffId || (exports.findOneByStaffId = findOneByStaffId = {}));
//# sourceMappingURL=index.js.map