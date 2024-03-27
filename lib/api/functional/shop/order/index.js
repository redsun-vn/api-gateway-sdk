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
exports.table_reservation = exports.shipping_lines = exports.shipping_line_tax_lines = exports.line_items = exports.line_item_tax_lines = exports.line_item_selection_groups = exports.draf_orders = exports.combining_promotions = exports.additional_fees = void 0;
exports.additional_fees = __importStar(require("./additional_fees"));
exports.combining_promotions = __importStar(require("./combining_promotions"));
exports.draf_orders = __importStar(require("./draf_orders"));
exports.line_item_selection_groups = __importStar(require("./line_item_selection_groups"));
exports.line_item_tax_lines = __importStar(require("./line_item_tax_lines"));
exports.line_items = __importStar(require("./line_items"));
exports.shipping_line_tax_lines = __importStar(require("./shipping_line_tax_lines"));
exports.shipping_lines = __importStar(require("./shipping_lines"));
exports.table_reservation = __importStar(require("./table_reservation"));
//# sourceMappingURL=index.js.map