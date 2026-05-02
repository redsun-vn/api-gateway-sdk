"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkin = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function checkin(connection, dto) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...checkin.METADATA,
        template: checkin.METADATA.path,
        path: checkin.path(),
    }, dto);
}
exports.checkin = checkin;
(function (checkin) {
    checkin.METADATA = {
        method: "POST",
        path: "/shop/clinic/checkin-walk-in",
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
    checkin.path = () => "/shop/clinic/checkin-walk-in";
})(checkin || (exports.checkin = checkin = {}));
//# sourceMappingURL=index.js.map