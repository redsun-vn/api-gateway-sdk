"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationNotePermission = exports.TableNotePermission = exports.ReservationPermission = exports.TablePermission = void 0;
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
var TableNotePermission;
(function (TableNotePermission) {
    TableNotePermission["VIEW"] = "table-note-view";
    TableNotePermission["CREATE"] = "table-note-create";
    TableNotePermission["UPDATE"] = "table-note-update";
    TableNotePermission["DELETE"] = "table-note-delete";
})(TableNotePermission || (exports.TableNotePermission = TableNotePermission = {}));
var ReservationNotePermission;
(function (ReservationNotePermission) {
    ReservationNotePermission["VIEW"] = "reservation-note-view";
    ReservationNotePermission["CREATE"] = "reservation-note-create";
    ReservationNotePermission["UPDATE"] = "reservation-note-update";
})(ReservationNotePermission || (exports.ReservationNotePermission = ReservationNotePermission = {}));
//# sourceMappingURL=reservation.js.map