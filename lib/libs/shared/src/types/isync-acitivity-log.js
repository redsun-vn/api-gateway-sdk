"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ISyncActivityLog = void 0;
var ISyncActivityLog;
(function (ISyncActivityLog) {
    let ACTION;
    (function (ACTION) {
        ACTION["CREATE"] = "create";
        ACTION["UPDATE"] = "update";
        ACTION["DELETE"] = "delete";
    })(ACTION || (ACTION = {}));
    let STATUS;
    (function (STATUS) {
        STATUS["SUCCESS"] = "success";
        STATUS["FAILURE"] = "failure";
    })(STATUS || (STATUS = {}));
})(ISyncActivityLog || (exports.ISyncActivityLog = ISyncActivityLog = {}));
//# sourceMappingURL=isync-acitivity-log.js.map