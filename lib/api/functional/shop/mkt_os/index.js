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
exports.runs = exports.unsubscribes = exports.channels = exports.settings = exports.entitlement = exports.campaigns = exports.brand_profile = exports.audiences = exports.market = void 0;
exports.market = __importStar(require("./market"));
exports.audiences = __importStar(require("./audiences"));
exports.brand_profile = __importStar(require("./brand_profile"));
exports.campaigns = __importStar(require("./campaigns"));
exports.entitlement = __importStar(require("./entitlement"));
exports.settings = __importStar(require("./settings"));
exports.channels = __importStar(require("./channels"));
exports.unsubscribes = __importStar(require("./unsubscribes"));
exports.runs = __importStar(require("./runs"));
//# sourceMappingURL=index.js.map