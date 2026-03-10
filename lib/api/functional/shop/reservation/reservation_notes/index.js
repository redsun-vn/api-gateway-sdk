"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.update = exports.findByReservation = exports.create = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function create(connection, reservationId, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...create.METADATA,
        template: create.METADATA.path,
        path: create.path(reservationId),
    }, data);
}
exports.create = create;
(function (create) {
    create.METADATA = {
        method: "POST",
        path: "/shop/reservation/reservation_notes/:reservationId",
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
    create.path = (reservationId) => `/shop/reservation/reservation_notes/${encodeURIComponent(reservationId?.toString() ?? "null")}`;
})(create || (exports.create = create = {}));
async function findByReservation(connection, reservationId, filter) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...findByReservation.METADATA,
        template: findByReservation.METADATA.path,
        path: findByReservation.path(reservationId, filter),
    });
}
exports.findByReservation = findByReservation;
(function (findByReservation) {
    findByReservation.METADATA = {
        method: "GET",
        path: "/shop/reservation/reservation_notes/:reservationId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    findByReservation.path = (reservationId, filter) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(filter))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = `/shop/reservation/reservation_notes/${encodeURIComponent(reservationId?.toString() ?? "null")}`;
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(findByReservation || (exports.findByReservation = findByReservation = {}));
async function update(connection, id, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...update.METADATA,
        template: update.METADATA.path,
        path: update.path(id),
    }, data);
}
exports.update = update;
(function (update) {
    update.METADATA = {
        method: "PUT",
        path: "/shop/reservation/reservation_notes/:id",
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
    update.path = (id) => `/shop/reservation/reservation_notes/${encodeURIComponent(id?.toString() ?? "null")}`;
})(update || (exports.update = update = {}));
//# sourceMappingURL=index.js.map