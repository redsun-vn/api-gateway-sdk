"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteSignature = exports.updateSignature = exports.createSignature = exports.listSignatures = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function listSignatures(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listSignatures.METADATA,
        template: listSignatures.METADATA.path,
        path: listSignatures.path(),
    });
}
exports.listSignatures = listSignatures;
(function (listSignatures) {
    listSignatures.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/signatures",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listSignatures.path = () => "/shop/mkt-os/social/signatures";
})(listSignatures || (exports.listSignatures = listSignatures = {}));
async function createSignature(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createSignature.METADATA,
        template: createSignature.METADATA.path,
        path: createSignature.path(),
    }, body);
}
exports.createSignature = createSignature;
(function (createSignature) {
    createSignature.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/signatures",
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
    createSignature.path = () => "/shop/mkt-os/social/signatures";
})(createSignature || (exports.createSignature = createSignature = {}));
async function updateSignature(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateSignature.METADATA,
        template: updateSignature.METADATA.path,
        path: updateSignature.path(id),
    }, body);
}
exports.updateSignature = updateSignature;
(function (updateSignature) {
    updateSignature.METADATA = {
        method: "PUT",
        path: "/shop/mkt-os/social/signatures/:id",
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
    updateSignature.path = (id) => `/shop/mkt-os/social/signatures/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateSignature || (exports.updateSignature = updateSignature = {}));
async function deleteSignature(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteSignature.METADATA,
        template: deleteSignature.METADATA.path,
        path: deleteSignature.path(id),
    });
}
exports.deleteSignature = deleteSignature;
(function (deleteSignature) {
    deleteSignature.METADATA = {
        method: "DELETE",
        path: "/shop/mkt-os/social/signatures/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteSignature.path = (id) => `/shop/mkt-os/social/signatures/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteSignature || (exports.deleteSignature = deleteSignature = {}));
//# sourceMappingURL=index.js.map