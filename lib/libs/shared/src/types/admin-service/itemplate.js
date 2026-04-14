"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TemplateStatus = exports.TemplateCategoryType = exports.TemplateType = void 0;
var TemplateType;
(function (TemplateType) {
    TemplateType["EMAIL"] = "EMAIL";
    TemplateType["SMS"] = "SMS";
    TemplateType["ZMS"] = "ZMS";
    TemplateType["RECEIPT"] = "RECEIPT";
    TemplateType["DEBT"] = "DEBT";
    TemplateType["NOTIFICATION"] = "NOTIFICATION";
    TemplateType["INVOICE"] = "INVOICE";
    TemplateType["CONTRACT"] = "CONTRACT";
    TemplateType["PRINT"] = "PRINT";
    TemplateType["OTHER"] = "OTHER";
})(TemplateType || (exports.TemplateType = TemplateType = {}));
var TemplateCategoryType;
(function (TemplateCategoryType) {
    TemplateCategoryType["TRANSACTION"] = "TRANSACTION";
    TemplateCategoryType["MARKETING"] = "MARKETING";
    TemplateCategoryType["NOTIFICATION"] = "NOTIFICATION";
    TemplateCategoryType["SYSTEM"] = "SYSTEM";
    TemplateCategoryType["REPORT"] = "REPORT";
    TemplateCategoryType["OTHER"] = "OTHER";
})(TemplateCategoryType || (exports.TemplateCategoryType = TemplateCategoryType = {}));
var TemplateStatus;
(function (TemplateStatus) {
    TemplateStatus["ACTIVE"] = "active";
    TemplateStatus["INACTIVE"] = "inactive";
    TemplateStatus["DRAFT"] = "draft";
    TemplateStatus["ARCHIVED"] = "archived";
})(TemplateStatus || (exports.TemplateStatus = TemplateStatus = {}));
//# sourceMappingURL=itemplate.js.map