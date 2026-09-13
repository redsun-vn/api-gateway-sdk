"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.aiProfile = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function aiProfile(connection) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...aiProfile.METADATA,
        template: aiProfile.METADATA.path,
        path: aiProfile.path(),
    });
}
exports.aiProfile = aiProfile;
(function (aiProfile) {
    aiProfile.METADATA = {
        method: "GET",
        path: "/shop/crm/shop-config/ai-profile",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    aiProfile.path = () => "/shop/crm/shop-config/ai-profile";
})(aiProfile || (exports.aiProfile = aiProfile = {}));
//# sourceMappingURL=index.js.map