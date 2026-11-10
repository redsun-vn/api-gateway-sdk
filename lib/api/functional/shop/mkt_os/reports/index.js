"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.company = exports.staff = exports.mine = exports.access = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function access(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...access.METADATA,
        template: access.METADATA.path,
        path: access.path(),
    });
}
exports.access = access;
(function (access) {
    access.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/reports/access",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    access.path = () => "/shop/mkt-os/reports/access";
})(access || (exports.access = access = {}));
async function mine(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...mine.METADATA,
        template: mine.METADATA.path,
        path: mine.path(query),
    });
}
exports.mine = mine;
(function (mine) {
    mine.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/reports/mine",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    mine.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/reports/mine";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(mine || (exports.mine = mine = {}));
async function staff(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...staff.METADATA,
        template: staff.METADATA.path,
        path: staff.path(query),
    });
}
exports.staff = staff;
(function (staff) {
    staff.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/reports/staff",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    staff.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/reports/staff";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(staff || (exports.staff = staff = {}));
async function company(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...company.METADATA,
        template: company.METADATA.path,
        path: company.path(query),
    });
}
exports.company = company;
(function (company) {
    company.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/reports/company",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    company.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/mkt-os/reports/company";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(company || (exports.company = company = {}));
//# sourceMappingURL=index.js.map