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
exports.getKitchenReportData = exports.staff_performance = exports.service_quality = exports.top_dishes = exports.state_distribution = exports.performance_by_hour = void 0;
const PlainFetcher_1 = require("@nestia/fetcher/lib/PlainFetcher");
exports.performance_by_hour = __importStar(require("./performance_by_hour"));
exports.state_distribution = __importStar(require("./state_distribution"));
exports.top_dishes = __importStar(require("./top_dishes"));
exports.service_quality = __importStar(require("./service_quality"));
exports.staff_performance = __importStar(require("./staff_performance"));
async function getKitchenReportData(connection, query) {
    return PlainFetcher_1.PlainFetcher.fetch(connection, {
        ...getKitchenReportData.METADATA,
        template: getKitchenReportData.METADATA.path,
        path: getKitchenReportData.path(query),
    });
}
exports.getKitchenReportData = getKitchenReportData;
(function (getKitchenReportData) {
    getKitchenReportData.METADATA = {
        method: "GET",
        path: "/shop/report/kitchen",
        request: null,
        response: {
            type: "application/json",
            encrypted: false,
        },
        status: 200,
    };
    getKitchenReportData.path = (query) => {
        const variables = new URLSearchParams();
        for (const [key, value] of Object.entries(query))
            if (undefined === value)
                continue;
            else if (Array.isArray(value))
                value.forEach((elem) => variables.append(key, String(elem)));
            else
                variables.set(key, String(value));
        const location = "/shop/report/kitchen";
        return 0 === variables.size
            ? location
            : `${location}?${variables.toString()}`;
    };
})(getKitchenReportData || (exports.getKitchenReportData = getKitchenReportData = {}));
//# sourceMappingURL=index.js.map