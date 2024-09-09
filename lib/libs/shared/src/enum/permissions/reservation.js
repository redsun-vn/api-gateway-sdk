"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationPermission = exports.TablePermission = void 0;
var TablePermission;
(function (TablePermission) {
    TablePermission["VIEW"] = "table-view";
    TablePermission["CREATE"] = "table-create";
    TablePermission["UPDATE"] = "table-update";
    TablePermission["DELETE"] = "table-delete";
})(TablePermission || (exports.TablePermission = TablePermission = {}));
var ReservationPermission;
(function (ReservationPermission) {
    ReservationPermission["VIEW"] = "reservation-view";
    ReservationPermission["CREATE"] = "reservation-create";
    ReservationPermission["UPDATE"] = "reservation-update";
    ReservationPermission["DELETE"] = "reservation-delete";
})(ReservationPermission || (exports.ReservationPermission = ReservationPermission = {}));
//# sourceMappingURL=reservation.js.map