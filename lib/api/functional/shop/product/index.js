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
exports.variants = exports.units = exports.selections = exports.selection_groups = exports.template = exports.$import = exports.product_options = exports.product_images = exports.collection = exports.collections = exports.attributes = void 0;
exports.attributes = __importStar(require("./attributes"));
exports.collections = __importStar(require("./collections"));
exports.collection = __importStar(require("./collection"));
exports.product_images = __importStar(require("./product_images"));
exports.product_options = __importStar(require("./product_options"));
exports.$import = __importStar(require("./$import"));
exports.template = __importStar(require("./template"));
exports.selection_groups = __importStar(require("./selection_groups"));
exports.selections = __importStar(require("./selections"));
exports.units = __importStar(require("./units"));
exports.variants = __importStar(require("./variants"));
//# sourceMappingURL=index.js.map