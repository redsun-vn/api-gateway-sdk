"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRanking = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function getRanking(connection, filter) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getRanking.METADATA,
        template: getRanking.METADATA.path,
        path: getRanking.path(filter),
    });
}
exports.getRanking = getRanking;
(function (getRanking) {
    getRanking.METADATA = {
        method: "GET",
        path: "/shop/reservation/rooms/ranking",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getRanking.path = (filter) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(filter))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/reservation/rooms/ranking";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getRanking || (exports.getRanking = getRanking = {}));
//# sourceMappingURL=index.js.map