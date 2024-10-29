"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteLine = exports.updateLine = exports.createLine = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createLine(connection, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createLine.METADATA,
        template: createLine.METADATA.path,
        path: createLine.path(),
    }, body);
}
exports.createLine = createLine;
(function (createLine) {
    createLine.METADATA = {
        method: "POST",
        path: "/shop/accounting/follow-up-levels/lines",
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
    createLine.path = () => "/shop/accounting/follow-up-levels/lines";
})(createLine || (exports.createLine = createLine = {}));
async function updateLine(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateLine.METADATA,
        template: updateLine.METADATA.path,
        path: updateLine.path(id),
    }, body);
}
exports.updateLine = updateLine;
(function (updateLine) {
    updateLine.METADATA = {
        method: "PUT",
        path: "/shop/accounting/follow-up-levels/lines/:id",
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
    updateLine.path = (id) => `/shop/accounting/follow-up-levels/lines/${encodeURIComponent(id?.toString() ?? "null")}`;
})(updateLine || (exports.updateLine = updateLine = {}));
async function deleteLine(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...deleteLine.METADATA,
        template: deleteLine.METADATA.path,
        path: deleteLine.path(id),
    });
}
exports.deleteLine = deleteLine;
(function (deleteLine) {
    deleteLine.METADATA = {
        method: "DELETE",
        path: "/shop/accounting/follow-up-levels/lines/:id",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    deleteLine.path = (id) => `/shop/accounting/follow-up-levels/lines/${encodeURIComponent(id?.toString() ?? "null")}`;
})(deleteLine || (exports.deleteLine = deleteLine = {}));
//# sourceMappingURL=index.js.map