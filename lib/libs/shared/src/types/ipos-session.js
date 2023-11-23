"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IPosSession = void 0;
var IPosSession;
(function (IPosSession) {
    let POSSessionState;
    (function (POSSessionState) {
        POSSessionState["OPENING"] = "opening";
        POSSessionState["OPENED"] = "opened";
        POSSessionState["CLOSING"] = "closing";
        POSSessionState["CLOSED"] = "closed";
    })(POSSessionState = IPosSession.POSSessionState || (IPosSession.POSSessionState = {}));
})(IPosSession || (exports.IPosSession = IPosSession = {}));
//# sourceMappingURL=ipos-session.js.map