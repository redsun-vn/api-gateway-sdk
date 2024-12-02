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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CMS_TAG_ENTITY_NAME = exports.CMS_POST_ENTITY_NAME = exports.CMS_PAGE_ENTITY_NAME = exports.CMS_CATEGORY_ENTITY_NAME = exports.TEMPLATE_ENTITY_NAME = exports.DOCUMENT_ENTITY_NAME = exports.WEBSITE_ENTITY_NAME = exports.THEME_TAG_ENTITY_NAME = exports.THEME_ENTITY_NAME = exports.THEME_CATEGORY_ENTITY_NAME = void 0;
__exportStar(require("./itheme-category"), exports);
__exportStar(require("./itheme"), exports);
__exportStar(require("./iwebsite"), exports);
__exportStar(require("./idocument"), exports);
__exportStar(require("./itemplate"), exports);
__exportStar(require("./cms.icategory"), exports);
__exportStar(require("./ipage"), exports);
__exportStar(require("./ipost"), exports);
exports.THEME_CATEGORY_ENTITY_NAME = 'CMSThemeCategoryEntity';
exports.THEME_ENTITY_NAME = 'CMSThemeEntity';
exports.THEME_TAG_ENTITY_NAME = 'CMSThemeTagEntity';
exports.WEBSITE_ENTITY_NAME = 'CMSWebsiteEntity';
exports.DOCUMENT_ENTITY_NAME = 'CMSDocumentEntity';
exports.TEMPLATE_ENTITY_NAME = 'CMSTemplateEntity';
exports.CMS_CATEGORY_ENTITY_NAME = 'CMSCategoryEntity';
exports.CMS_PAGE_ENTITY_NAME = 'CMSPageEntity';
exports.CMS_POST_ENTITY_NAME = 'CMSPostEntity';
exports.CMS_TAG_ENTITY_NAME = 'CMSTagEntity';
//# sourceMappingURL=index.js.map