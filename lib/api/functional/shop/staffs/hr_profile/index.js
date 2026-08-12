"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createHrProfile = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function createHrProfile(connection, input) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...createHrProfile.METADATA,
        template: createHrProfile.METADATA.path,
        path: createHrProfile.path(),
    }, input);
}
exports.createHrProfile = createHrProfile;
(function (createHrProfile) {
    createHrProfile.METADATA = {
        method: "POST",
        path: "/shop/staffs/hr-profile",
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
    createHrProfile.path = () => "/shop/staffs/hr-profile";
})(createHrProfile || (exports.createHrProfile = createHrProfile = {}));
//# sourceMappingURL=index.js.map