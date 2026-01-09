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
exports.dashboard = exports.department_performance = exports.working_hours = exports.monthly_payroll = exports.current_employees = exports.daily_attendance = exports.summary = void 0;
exports.summary = __importStar(require("./summary"));
exports.daily_attendance = __importStar(require("./daily_attendance"));
exports.current_employees = __importStar(require("./current_employees"));
exports.monthly_payroll = __importStar(require("./monthly_payroll"));
exports.working_hours = __importStar(require("./working_hours"));
exports.department_performance = __importStar(require("./department_performance"));
exports.dashboard = __importStar(require("./dashboard"));
//# sourceMappingURL=index.js.map