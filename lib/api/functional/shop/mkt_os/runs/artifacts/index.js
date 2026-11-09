"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateArtifact = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
async function updateArtifact(connection, id, artifactId, body) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...updateArtifact.METADATA,
        template: updateArtifact.METADATA.path,
        path: updateArtifact.path(id, artifactId),
    }, body);
}
exports.updateArtifact = updateArtifact;
(function (updateArtifact) {
    updateArtifact.METADATA = {
        method: "PATCH",
        path: "/shop/mkt-os/runs/:id/artifacts/:artifactId",
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
    updateArtifact.path = (id, artifactId) => `/shop/mkt-os/runs/${encodeURIComponent(id?.toString() ?? "null")}/artifacts/${encodeURIComponent(artifactId?.toString() ?? "null")}`;
})(updateArtifact || (exports.updateArtifact = updateArtifact = {}));
//# sourceMappingURL=index.js.map