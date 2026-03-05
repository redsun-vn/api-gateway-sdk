"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReservationNotePermission = exports.RoomNotePermission = exports.ReservationPermission = exports.TablePermission = void 0;
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
var RoomNotePermission;
(function (RoomNotePermission) {
    RoomNotePermission["VIEW"] = "room-note-view";
    RoomNotePermission["CREATE"] = "room-note-create";
    RoomNotePermission["UPDATE"] = "room-note-update";
    RoomNotePermission["DELETE"] = "room-note-delete";
})(RoomNotePermission || (exports.RoomNotePermission = RoomNotePermission = {}));
var ReservationNotePermission;
(function (ReservationNotePermission) {
    ReservationNotePermission["VIEW"] = "reservation-note-view";
    ReservationNotePermission["CREATE"] = "reservation-note-create";
    ReservationNotePermission["UPDATE"] = "reservation-note-update";
})(ReservationNotePermission || (exports.ReservationNotePermission = ReservationNotePermission = {}));
//# sourceMappingURL=reservation.js.map