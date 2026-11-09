"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addNote = exports.notes = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function notes(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...notes.METADATA,
        template: notes.METADATA.path,
        path: notes.path(id),
    });
}
exports.notes = notes;
(function (notes) {
    notes.METADATA = {
        method: "GET",
        path: "/shop/mkt-os/social/posts/:id/notes",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    notes.path = (id) => `/shop/mkt-os/social/posts/${encodeURIComponent(id?.toString() ?? "null")}/notes`;
})(notes || (exports.notes = notes = {}));
async function addNote(connection, id, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...addNote.METADATA,
        template: addNote.METADATA.path,
        path: addNote.path(id),
    }, body);
}
exports.addNote = addNote;
(function (addNote) {
    addNote.METADATA = {
        method: "POST",
        path: "/shop/mkt-os/social/posts/:id/notes",
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
    addNote.path = (id) => `/shop/mkt-os/social/posts/${encodeURIComponent(id?.toString() ?? "null")}/notes`;
})(addNote || (exports.addNote = addNote = {}));
//# sourceMappingURL=index.js.map