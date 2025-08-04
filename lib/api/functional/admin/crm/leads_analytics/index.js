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
exports.$import = exports.bant_follow_up_urgent = exports.bant_score = exports.assign_user = exports.convert_to_deal = exports.auto_assign = exports.assignment = exports.status = exports.source = exports.scoring = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.scoring = __importStar(require("./scoring"));
exports.source = __importStar(require("./source"));
exports.status = __importStar(require("./status"));
exports.assignment = __importStar(require("./assignment"));
exports.auto_assign = __importStar(require("./auto_assign"));
exports.convert_to_deal = __importStar(require("./convert_to_deal"));
exports.assign_user = __importStar(require("./assign_user"));
exports.bant_score = __importStar(require("./bant_score"));
exports.bant_follow_up_urgent = __importStar(require("./bant_follow_up_urgent"));
async function $import(connection, data) {
    return PlainFetcher_1.PlainFetcher.fetch({
        ...connection,
        headers: {
            ...connection.headers,
            "Content-Type": "application/json",
        },
    }, {
        ...$import.METADATA,
        template: $import.METADATA.path,
        path: $import.path(),
    }, data);
}
exports.$import = $import;
(function ($import) {
    $import.METADATA = {
        method: "POST",
        path: "/admin/crm/leads-analytics/import",
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
    $import.path = () => "/admin/crm/leads-analytics/import";
})($import || (exports.$import = $import = {}));
//# sourceMappingURL=index.js.map