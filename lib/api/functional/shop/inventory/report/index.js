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
exports.daily = exports.expiring_stock = exports.movement_history = exports.warehouse_summary = exports.turnover = exports.reorder_recommendation = exports.cost_analysis = exports.stock_detail = exports.movement = exports.stock_status = exports.overview = void 0;
exports.overview = __importStar(require("./overview"));
exports.stock_status = __importStar(require("./stock_status"));
exports.movement = __importStar(require("./movement"));
exports.stock_detail = __importStar(require("./stock_detail"));
exports.cost_analysis = __importStar(require("./cost_analysis"));
exports.reorder_recommendation = __importStar(require("./reorder_recommendation"));
exports.turnover = __importStar(require("./turnover"));
exports.warehouse_summary = __importStar(require("./warehouse_summary"));
exports.movement_history = __importStar(require("./movement_history"));
exports.expiring_stock = __importStar(require("./expiring_stock"));
exports.daily = __importStar(require("./daily"));
//# sourceMappingURL=index.js.map