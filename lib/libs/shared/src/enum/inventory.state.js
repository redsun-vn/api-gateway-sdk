"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InventoryTransactionState = exports.StockLotState = exports.StockRouterReferentAction = exports.StockReferentType = exports.StocktakeType = exports.StocktakeStatus = exports.StockPickingType = exports.StockPickingMoveType = exports.StockPickingState = exports.StockMoveState = exports.StockLocationType = void 0;
var StockLocationType;
(function (StockLocationType) {
    StockLocationType["SUPPLIER"] = "supplier";
    StockLocationType["VIEW"] = "view";
    StockLocationType["INTERNAL"] = "internal";
    StockLocationType["CUSTOMER"] = "customer";
    StockLocationType["INVENTORY"] = "inventory";
    StockLocationType["PRODUCTION"] = "production";
    StockLocationType["TRANSIT"] = "transit";
})(StockLocationType || (exports.StockLocationType = StockLocationType = {}));
var StockMoveState;
(function (StockMoveState) {
    StockMoveState["DRAF"] = "draf";
    StockMoveState["WAITING"] = "waiting";
    StockMoveState["CONFIRMED"] = "confirmed";
    StockMoveState["ASSIGNED"] = "assigned";
    StockMoveState["DONE"] = "done";
    StockMoveState["CANCELED"] = "canceled";
})(StockMoveState || (exports.StockMoveState = StockMoveState = {}));
var StockPickingState;
(function (StockPickingState) {
    StockPickingState["DRAF"] = "draf";
    StockPickingState["WAITING"] = "waiting";
    StockPickingState["CONFIRMED"] = "confirmed";
    StockPickingState["ASSIGNED"] = "assigned";
    StockPickingState["DONE"] = "done";
    StockPickingState["CANCELED"] = "canceled";
})(StockPickingState || (exports.StockPickingState = StockPickingState = {}));
var StockPickingMoveType;
(function (StockPickingMoveType) {
    StockPickingMoveType["DIRECT"] = "direct";
    StockPickingMoveType["ONE"] = "one";
})(StockPickingMoveType || (exports.StockPickingMoveType = StockPickingMoveType = {}));
var StockPickingType;
(function (StockPickingType) {
    StockPickingType["INCOMING"] = "incoming";
    StockPickingType["OUTGOING"] = "outgoing";
    StockPickingType["INTERNAL"] = "internal";
    StockPickingType["RETURN"] = "return";
})(StockPickingType || (exports.StockPickingType = StockPickingType = {}));
var StocktakeStatus;
(function (StocktakeStatus) {
    StocktakeStatus["DRAF"] = "draf";
    StocktakeStatus["OPEN"] = "open";
    StocktakeStatus["IN_PROGRESS"] = "in_progress";
    StocktakeStatus["COMPLETED"] = "completed";
})(StocktakeStatus || (exports.StocktakeStatus = StocktakeStatus = {}));
var StocktakeType;
(function (StocktakeType) {
    StocktakeType["MANUAL"] = "manual";
    StocktakeType["SCHEDULE"] = "schedule";
})(StocktakeType || (exports.StocktakeType = StocktakeType = {}));
var StockReferentType;
(function (StockReferentType) {
    StockReferentType["SALE_ORDER"] = "sale_order";
    StockReferentType["TRANSFER_ORDER"] = "transfer_order";
    StockReferentType["INBOUND_ORDER"] = "inbound_order";
    StockReferentType["OUTBOUND_ORDER"] = "outbound_order";
    StockReferentType["RETURN_ORDER"] = "return_order";
    StockReferentType["DESTROY"] = "destroy";
})(StockReferentType || (exports.StockReferentType = StockReferentType = {}));
var StockRouterReferentAction;
(function (StockRouterReferentAction) {
    StockRouterReferentAction["ORDER_VERIFIED"] = "order_verified";
    StockRouterReferentAction["ORDER_BRANCH_TRANSFER"] = "order_branch_transfer";
    StockRouterReferentAction["ORDER_DELIVERY_PROVIDER"] = "order_delivery_provider";
    StockRouterReferentAction["ORDER_SELF_DELIVERY"] = "order_self_delivery";
    StockRouterReferentAction["ORDER_DIRECT_SALE"] = "order_direct_sale";
    StockRouterReferentAction["ORDER_COMPLETED"] = "order_completed";
    StockRouterReferentAction["ORDER_CANCELED"] = "order_canceled";
})(StockRouterReferentAction || (exports.StockRouterReferentAction = StockRouterReferentAction = {}));
var StockLotState;
(function (StockLotState) {
    StockLotState["OPEN"] = "open";
    StockLotState["FULL_RELEASED"] = "full_released";
    StockLotState["PARTIAL_DESTROYED"] = "partial_destroyed";
    StockLotState["FULL_DESTROYED"] = "full_destroyed";
    StockLotState["SUPPLIER_TOOK_PARTIAL_RECALL"] = "supplier_took_partial_recall";
    StockLotState["SUPPLIER_TOOK_FULL_RECALL"] = "supplier_took_full_recall";
})(StockLotState || (exports.StockLotState = StockLotState = {}));
var InventoryTransactionState;
(function (InventoryTransactionState) {
    InventoryTransactionState["ALLOCATE"] = "allocate";
    InventoryTransactionState["RELEASED"] = "released";
    InventoryTransactionState["RESTOCK"] = "restock";
    InventoryTransactionState["CREATE_COMPLETED"] = "create_completed";
})(InventoryTransactionState || (exports.InventoryTransactionState = InventoryTransactionState = {}));
//# sourceMappingURL=inventory.state.js.map