"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IReservation = void 0;
var IReservation;
(function (IReservation) {
    let ReservationStatus;
    (function (ReservationStatus) {
        ReservationStatus["PENDING"] = "pending";
        ReservationStatus["ASSIGNED"] = "assigned";
        ReservationStatus["RECEIVED"] = "received";
        ReservationStatus["PAST"] = "past";
        ReservationStatus["CANCELED"] = "canceled";
        ReservationStatus["COMPLETED"] = "completed";
    })(ReservationStatus = IReservation.ReservationStatus || (IReservation.ReservationStatus = {}));
})(IReservation || (exports.IReservation = IReservation = {}));
//# sourceMappingURL=ireservation.js.map