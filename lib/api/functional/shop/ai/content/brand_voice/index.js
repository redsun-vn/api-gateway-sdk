"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBrandVoice = exports.updateBrandVoice = exports.createBrandVoice = exports.getBrandVoice = exports.listBrandVoices = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listBrandVoices(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listBrandVoices.METADATA,
        template: listBrandVoices.METADATA.path,
        path: listBrandVoices.path(),
    });
}
exports.listBrandVoices = listBrandVoices;
(function (listBrandVoices) {
    listBrandVoices.METADATA = {
        method: "GET",
        path: "/shop/ai/content/brand-voice",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listBrandVoices.path = () => "/shop/ai/content/brand-voice";
})(listBrandVoices || (exports.listBrandVoices = listBrandVoices = {}));
async function getBrandVoice(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getBrandVoice.METADATA,
        template: getBrandVoice.METADATA.path,
        path: getBrandVoice.path(id),
    });
}
exports.getBrandVoice = getBrandVoice;
(function (getBrandVoice) {
    getBrandVoice.METADATA = {
        method: "GET",
        path: "/shop/ai/content/brand-voice/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getBrandVoice.path = (id) => `/shop/ai/content/brand-voice/${encodeURIComponent(id?.toString() ?? "null")}`;
})(getBrandVoice || (exports.getBrandVoice = getBrandVoice = {}));
async function createBrandVoice(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createBrandVoice.METADATA,
        template: createBrandVoice.METADATA.path,
        path: createBrandVoice.path(),
    }, data);
}
exports.createBrandVoice = createBrandVoice;
(function (createBrandVoice) {
    createBrandVoice.METADATA = {
        method: "POST",
        path: "/shop/ai/content/brand-voice",
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
    createBrandVoice.path = () => "/shop/ai/content/brand-voice";
})(createBrandVoice || (exports.createBrandVoice = createBrandVoice = {}));
async function updateBrandVoice(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateBrandVoice.METADATA,
        template: updateBrandVoice.METADATA.path,
        path: updateBrandVoice.path(id),
    }, data);
}
exports.updateBrandVoice = updateBrandVoice;
(function (updateBrandVoice) {
    updateBrandVoice.METADATA = {
        method: "PUT",
        path: "/shop/ai/content/brand-voice/:id",
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
    updateBrandVoice.path = (id) => `/shop/ai/content/brand-voice/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateBrandVoice || (exports.updateBrandVoice = updateBrandVoice = {}));
async function deleteBrandVoice(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteBrandVoice.METADATA,
        template: deleteBrandVoice.METADATA.path,
        path: deleteBrandVoice.path(id),
    });
}
exports.deleteBrandVoice = deleteBrandVoice;
(function (deleteBrandVoice) {
    deleteBrandVoice.METADATA = {
        method: "DELETE",
        path: "/shop/ai/content/brand-voice/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteBrandVoice.path = (id) => `/shop/ai/content/brand-voice/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteBrandVoice || (exports.deleteBrandVoice = deleteBrandVoice = {}));
//# sourceMappingURL=index.js.map