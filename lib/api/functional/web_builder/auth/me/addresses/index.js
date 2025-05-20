"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteAddressFromWebsite = exports.updateAddressFromWebsite = exports.createPartnerAddressFromWebsite = exports.findAllPartnerAddress = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function findAllPartnerAddress(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findAllPartnerAddress.METADATA,
        template: findAllPartnerAddress.METADATA.path,
        path: findAllPartnerAddress.path(query),
    });
}
exports.findAllPartnerAddress = findAllPartnerAddress;
(function (findAllPartnerAddress) {
    findAllPartnerAddress.METADATA = {
        method: "GET",
        path: "/web-builder/auth/me/addresses",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findAllPartnerAddress.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/web-builder/auth/me/addresses";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findAllPartnerAddress || (exports.findAllPartnerAddress = findAllPartnerAddress = {}));
async function createPartnerAddressFromWebsite(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createPartnerAddressFromWebsite.METADATA,
        template: createPartnerAddressFromWebsite.METADATA.path,
        path: createPartnerAddressFromWebsite.path(),
    }, input);
}
exports.createPartnerAddressFromWebsite = createPartnerAddressFromWebsite;
(function (createPartnerAddressFromWebsite) {
    createPartnerAddressFromWebsite.METADATA = {
        method: "POST",
        path: "/web-builder/auth/me/addresses",
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
    createPartnerAddressFromWebsite.path = () => "/web-builder/auth/me/addresses";
})(createPartnerAddressFromWebsite || (exports.createPartnerAddressFromWebsite = createPartnerAddressFromWebsite = {}));
async function updateAddressFromWebsite(connection, data, id) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateAddressFromWebsite.METADATA,
        template: updateAddressFromWebsite.METADATA.path,
        path: updateAddressFromWebsite.path(id),
    }, data);
}
exports.updateAddressFromWebsite = updateAddressFromWebsite;
(function (updateAddressFromWebsite) {
    updateAddressFromWebsite.METADATA = {
        method: "PUT",
        path: "/web-builder/auth/me/addresses/:id",
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
    updateAddressFromWebsite.path = (id) => `/web-builder/auth/me/addresses/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateAddressFromWebsite || (exports.updateAddressFromWebsite = updateAddressFromWebsite = {}));
async function deleteAddressFromWebsite(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteAddressFromWebsite.METADATA,
        template: deleteAddressFromWebsite.METADATA.path,
        path: deleteAddressFromWebsite.path(id),
    });
}
exports.deleteAddressFromWebsite = deleteAddressFromWebsite;
(function (deleteAddressFromWebsite) {
    deleteAddressFromWebsite.METADATA = {
        method: "DELETE",
        path: "/web-builder/auth/me/addresses/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteAddressFromWebsite.path = (id) => `/web-builder/auth/me/addresses/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteAddressFromWebsite || (exports.deleteAddressFromWebsite = deleteAddressFromWebsite = {}));
//# sourceMappingURL=index.js.map