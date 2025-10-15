"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSpaceType = exports.FileStatus = void 0;
var FileStatus;
(function (FileStatus) {
    FileStatus["PROCESSING"] = "processing";
    FileStatus["READY"] = "ready";
    FileStatus["UPLOADED"] = "uploaded";
    FileStatus["FAILED"] = "failed";
})(FileStatus || (exports.FileStatus = FileStatus = {}));
var FileSpaceType;
(function (FileSpaceType) {
    FileSpaceType["PERSONAL"] = "personal";
    FileSpaceType["SHOP"] = "shop";
    FileSpaceType["COMPANY"] = "company";
    FileSpaceType["SHARED"] = "shared";
})(FileSpaceType || (exports.FileSpaceType = FileSpaceType = {}));
//# sourceMappingURL=file.status.js.map