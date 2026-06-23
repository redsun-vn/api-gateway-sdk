"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resume = exports.reassign_suggestions = exports.pause = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.pause = __importStar(require("./pause"));
exports.reassign_suggestions = __importStar(require("./reassign_suggestions"));
async function resume(connection, entityType, entityId) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...resume.METADATA,
        template: resume.METADATA.path,
        path: resume.path(entityType, entityId),
    });
}
exports.resume = resume;
(function (resume) {
    resume.METADATA = {
        method: "POST",
        path: "/shop/crm/sla/resume/:entityType/:entityId",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 201,
    };
    resume.path = (entityType, entityId) => `/shop/crm/sla/resume/${encodeURIComponent(entityType?.toString() ?? "null")}/${encodeURIComponent(entityId?.toString() ?? "null")}`;
})(resume || (exports.resume = resume = {}));
//# sourceMappingURL=index.js.map