"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NotePriority = exports.NoteCategory = exports.NoteStatus = void 0;
var NoteStatus;
(function (NoteStatus) {
    NoteStatus["OPEN"] = "open";
    NoteStatus["IN_PROGRESS"] = "in_progress";
    NoteStatus["RESOLVED"] = "resolved";
    NoteStatus["CLOSED"] = "closed";
})(NoteStatus || (exports.NoteStatus = NoteStatus = {}));
var NoteCategory;
(function (NoteCategory) {
    NoteCategory["INCIDENT"] = "incident";
    NoteCategory["MAINTENANCE"] = "maintenance";
    NoteCategory["CLEANING"] = "cleaning";
    NoteCategory["GUEST_REQUEST"] = "guest_request";
    NoteCategory["FEEDBACK"] = "feedback";
    NoteCategory["DAMAGE"] = "damage";
    NoteCategory["LOST_FOUND"] = "lost_found";
    NoteCategory["OTHER"] = "other";
})(NoteCategory || (exports.NoteCategory = NoteCategory = {}));
var NotePriority;
(function (NotePriority) {
    NotePriority["LOW"] = "low";
    NotePriority["MEDIUM"] = "medium";
    NotePriority["HIGH"] = "high";
    NotePriority["URGENT"] = "urgent";
})(NotePriority || (exports.NotePriority = NotePriority = {}));
//# sourceMappingURL=reservation-note.enum.js.map