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
exports.tasks = exports.stages = exports.shop_config = exports.scoring_rules = exports.pipelines = exports.opportunities = exports.onboarding = exports.leads = exports.kpi_targets = exports.facebook = exports.dashboard = exports.custom_fields = exports.notifications = exports.bant = exports.attachments = exports.opportunity = exports.admin = exports.activities = void 0;
exports.activities = __importStar(require("./activities"));
exports.admin = __importStar(require("./admin"));
exports.opportunity = __importStar(require("./opportunity"));
exports.attachments = __importStar(require("./attachments"));
exports.bant = __importStar(require("./bant"));
exports.notifications = __importStar(require("./notifications"));
exports.custom_fields = __importStar(require("./custom_fields"));
exports.dashboard = __importStar(require("./dashboard"));
exports.facebook = __importStar(require("./facebook"));
exports.kpi_targets = __importStar(require("./kpi_targets"));
exports.leads = __importStar(require("./leads"));
exports.onboarding = __importStar(require("./onboarding"));
exports.opportunities = __importStar(require("./opportunities"));
exports.pipelines = __importStar(require("./pipelines"));
exports.scoring_rules = __importStar(require("./scoring_rules"));
exports.shop_config = __importStar(require("./shop_config"));
exports.stages = __importStar(require("./stages"));
exports.tasks = __importStar(require("./tasks"));
//# sourceMappingURL=index.js.map