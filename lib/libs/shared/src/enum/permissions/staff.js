"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GroupsPermission = exports.StaffsPermission = void 0;
var StaffsPermission;
(function (StaffsPermission) {
    StaffsPermission["VIEW"] = "staff-view";
    StaffsPermission["CREATE"] = "staff-create";
    StaffsPermission["UPDATE"] = "staff-update";
    StaffsPermission["DELETE"] = "staff-delete";
})(StaffsPermission || (exports.StaffsPermission = StaffsPermission = {}));
var GroupsPermission;
(function (GroupsPermission) {
    GroupsPermission["VIEW"] = "staff_role-view";
    GroupsPermission["CREATE"] = "staff_role-create";
    GroupsPermission["UPDATE"] = "staff_role-update";
    GroupsPermission["DELETE"] = "staff_role-delete";
})(GroupsPermission || (exports.GroupsPermission = GroupsPermission = {}));
//# sourceMappingURL=staff.js.map