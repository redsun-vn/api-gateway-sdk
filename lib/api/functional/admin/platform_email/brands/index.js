"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBrand = exports.updateBrand = exports.createBrand = exports.listBrands = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listBrands(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listBrands.METADATA,
        template: listBrands.METADATA.path,
        path: listBrands.path(),
    });
}
exports.listBrands = listBrands;
(function (listBrands) {
    listBrands.METADATA = {
        method: "GET",
        path: "/admin/platform-email/brands",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listBrands.path = () => "/admin/platform-email/brands";
})(listBrands || (exports.listBrands = listBrands = {}));
async function createBrand(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createBrand.METADATA,
        template: createBrand.METADATA.path,
        path: createBrand.path(),
    }, body);
}
exports.createBrand = createBrand;
(function (createBrand) {
    createBrand.METADATA = {
        method: "POST",
        path: "/admin/platform-email/brands",
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
    createBrand.path = () => "/admin/platform-email/brands";
})(createBrand || (exports.createBrand = createBrand = {}));
async function updateBrand(connection, code, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateBrand.METADATA,
        template: updateBrand.METADATA.path,
        path: updateBrand.path(code),
    }, body);
}
exports.updateBrand = updateBrand;
(function (updateBrand) {
    updateBrand.METADATA = {
        method: "PUT",
        path: "/admin/platform-email/brands/:code",
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
    updateBrand.path = (code) => `/admin/platform-email/brands/${encodeURIComponent(code?.toString() ?? "null")}`;
})(updateBrand || (exports.updateBrand = updateBrand = {}));
async function deleteBrand(connection, code) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteBrand.METADATA,
        template: deleteBrand.METADATA.path,
        path: deleteBrand.path(code),
    });
}
exports.deleteBrand = deleteBrand;
(function (deleteBrand) {
    deleteBrand.METADATA = {
        method: "DELETE",
        path: "/admin/platform-email/brands/:code",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteBrand.path = (code) => `/admin/platform-email/brands/${encodeURIComponent(code?.toString() ?? "null")}`;
})(deleteBrand || (exports.deleteBrand = deleteBrand = {}));
//# sourceMappingURL=index.js.map