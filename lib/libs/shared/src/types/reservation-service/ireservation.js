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
    let ClinicPriority;
    (function (ClinicPriority) {
        ClinicPriority["URGENT"] = "urgent";
        ClinicPriority["VIP"] = "vip";
        ClinicPriority["NORMAL"] = "normal";
    })(ClinicPriority = IReservation.ClinicPriority || (IReservation.ClinicPriority = {}));
    let ClinicBookingChannel;
    (function (ClinicBookingChannel) {
        ClinicBookingChannel["WALK_IN"] = "walk_in";
        ClinicBookingChannel["PHONE"] = "phone";
        ClinicBookingChannel["ONLINE"] = "online";
        ClinicBookingChannel["ZALO"] = "zalo";
        ClinicBookingChannel["APP"] = "app";
    })(ClinicBookingChannel = IReservation.ClinicBookingChannel || (IReservation.ClinicBookingChannel = {}));
})(IReservation || (exports.IReservation = IReservation = {}));
//# sourceMappingURL=ireservation.js.map