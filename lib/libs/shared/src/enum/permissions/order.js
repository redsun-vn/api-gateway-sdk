"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DraftOrdersPermission = exports.OrdersPermission = void 0;
var OrdersPermission;
(function (OrdersPermission) {
    OrdersPermission["VIEW"] = "order-view";
    OrdersPermission["CREATE"] = "order-create";
    OrdersPermission["UPDATE"] = "order-update";
    OrdersPermission["DELETE"] = "order-delete";
})(OrdersPermission || (exports.OrdersPermission = OrdersPermission = {}));
var DraftOrdersPermission;
(function (DraftOrdersPermission) {
    DraftOrdersPermission["VIEW"] = "order_draft-view";
    DraftOrdersPermission["CREATE"] = "order_draft-create";
    DraftOrdersPermission["UPDATE"] = "order_draft-update";
    DraftOrdersPermission["DELETE"] = "order_draft-delete";
})(DraftOrdersPermission || (exports.DraftOrdersPermission = DraftOrdersPermission = {}));
//# sourceMappingURL=order.js.map