"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailActionCatalogPermission = exports.EmailHistoryPermission = exports.EmailTemplatePermission = exports.EmailConfigPermission = void 0;
var EmailConfigPermission;
(function (EmailConfigPermission) {
    EmailConfigPermission["VIEW"] = "email_config-view";
    EmailConfigPermission["CREATE"] = "email_config-create";
    EmailConfigPermission["UPDATE"] = "email_config-update";
    EmailConfigPermission["DELETE"] = "email_config-delete";
})(EmailConfigPermission || (exports.EmailConfigPermission = EmailConfigPermission = {}));
var EmailTemplatePermission;
(function (EmailTemplatePermission) {
    EmailTemplatePermission["VIEW"] = "email_template-view";
    EmailTemplatePermission["CREATE"] = "email_template-create";
    EmailTemplatePermission["UPDATE"] = "email_template-update";
    EmailTemplatePermission["DELETE"] = "email_template-delete";
})(EmailTemplatePermission || (exports.EmailTemplatePermission = EmailTemplatePermission = {}));
var EmailHistoryPermission;
(function (EmailHistoryPermission) {
    EmailHistoryPermission["VIEW"] = "email_history-view";
    EmailHistoryPermission["CREATE"] = "email_history-create";
    EmailHistoryPermission["UPDATE"] = "email_history-update";
    EmailHistoryPermission["DELETE"] = "email_history-delete";
})(EmailHistoryPermission || (exports.EmailHistoryPermission = EmailHistoryPermission = {}));
var EmailActionCatalogPermission;
(function (EmailActionCatalogPermission) {
    EmailActionCatalogPermission["VIEW"] = "email_action_catalog-view";
    EmailActionCatalogPermission["UPDATE"] = "email_action_catalog-update";
})(EmailActionCatalogPermission || (exports.EmailActionCatalogPermission = EmailActionCatalogPermission = {}));
//# sourceMappingURL=email.js.map