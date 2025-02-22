"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubscriptionOrdersPermission = exports.SaleOrdersPermission = exports.DraftOrdersPermission = exports.OrdersPermission = void 0;
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
var SaleOrdersPermission;
(function (SaleOrdersPermission) {
    SaleOrdersPermission["VIEW"] = "order_sale-view";
    SaleOrdersPermission["CREATE"] = "order_sale-create";
    SaleOrdersPermission["UPDATE"] = "order_sale-update";
    SaleOrdersPermission["DELETE"] = "order_sale-delete";
})(SaleOrdersPermission || (exports.SaleOrdersPermission = SaleOrdersPermission = {}));
var SubscriptionOrdersPermission;
(function (SubscriptionOrdersPermission) {
    SubscriptionOrdersPermission["VIEW"] = "order_subscription-view";
    SubscriptionOrdersPermission["CREATE"] = "order_subscription-create";
    SubscriptionOrdersPermission["UPDATE"] = "order_subscription-update";
    SubscriptionOrdersPermission["DELETE"] = "order_subscription-delete";
})(SubscriptionOrdersPermission || (exports.SubscriptionOrdersPermission = SubscriptionOrdersPermission = {}));
//# sourceMappingURL=order.js.map