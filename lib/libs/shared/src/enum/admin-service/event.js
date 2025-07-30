"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AddressType = exports.EventPurpose = exports.PriorityLevel = exports.EventType = void 0;
var EventType;
(function (EventType) {
    EventType["MEETING"] = "MEETING";
    EventType["APPOINTMENT"] = "APPOINTMENT";
    EventType["TASK"] = "TASK";
    EventType["REMINDER"] = "REMINDER";
    EventType["OTHER"] = "OTHER";
})(EventType || (exports.EventType = EventType = {}));
var PriorityLevel;
(function (PriorityLevel) {
    PriorityLevel["LOW"] = "LOW";
    PriorityLevel["MEDIUM"] = "MEDIUM";
    PriorityLevel["HIGH"] = "HIGH";
    PriorityLevel["URGENT"] = "URGENT";
})(PriorityLevel || (exports.PriorityLevel = PriorityLevel = {}));
var EventPurpose;
(function (EventPurpose) {
    EventPurpose["INTRODUCTION"] = "INTRODUCTION";
    EventPurpose["DISCUSSION"] = "DISCUSSION";
    EventPurpose["PRESENTATION"] = "PRESENTATION";
    EventPurpose["NEGOTIATION"] = "NEGOTIATION";
    EventPurpose["FOLLOW_UP"] = "FOLLOW_UP";
    EventPurpose["TECH_SUPPORT"] = "TECH_SUPPORT";
    EventPurpose["RELATIONSHIP"] = "RELATIONSHIP";
    EventPurpose["OTHER"] = "OTHER";
})(EventPurpose || (exports.EventPurpose = EventPurpose = {}));
var AddressType;
(function (AddressType) {
    AddressType["OFFICE"] = "OFFICE";
    AddressType["CUSTOMER_ADDRESS"] = "CUSTOMER_ADDRESS";
    AddressType["ONLINE"] = "ONLINE";
    AddressType["OTHER"] = "OTHER";
})(AddressType || (exports.AddressType = AddressType = {}));
//# sourceMappingURL=event.js.map