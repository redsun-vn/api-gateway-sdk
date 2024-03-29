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
exports.warehouses = exports.stocktakes = exports.stock_rules = exports.stock_routers = exports.stock_quantity = exports.stock_pickings = exports.stock_picking_types = exports.stock_moves = exports.stock_lots = exports.stock_locations = exports.group_warehouses = void 0;
exports.group_warehouses = __importStar(require("./group_warehouses"));
exports.stock_locations = __importStar(require("./stock_locations"));
exports.stock_lots = __importStar(require("./stock_lots"));
exports.stock_moves = __importStar(require("./stock_moves"));
exports.stock_picking_types = __importStar(require("./stock_picking_types"));
exports.stock_pickings = __importStar(require("./stock_pickings"));
exports.stock_quantity = __importStar(require("./stock_quantity"));
exports.stock_routers = __importStar(require("./stock_routers"));
exports.stock_rules = __importStar(require("./stock_rules"));
exports.stocktakes = __importStar(require("./stocktakes"));
exports.warehouses = __importStar(require("./warehouses"));
//# sourceMappingURL=index.js.map