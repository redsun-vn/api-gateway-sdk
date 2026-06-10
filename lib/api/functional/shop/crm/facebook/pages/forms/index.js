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
exports.listForms = exports.mapping = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.mapping = __importStar(require("./mapping"));
async function listForms(connection, id) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...listForms.METADATA,
        template: listForms.METADATA.path,
        path: listForms.path(id),
    });
}
exports.listForms = listForms;
(function (listForms) {
    listForms.METADATA = {
        method: "GET",
        path: "/shop/crm/facebook/pages/:id/forms",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    listForms.path = (id) => `/shop/crm/facebook/pages/${encodeURIComponent(id?.toString() ?? "null")}/forms`;
})(listForms || (exports.listForms = listForms = {}));
//# sourceMappingURL=index.js.map