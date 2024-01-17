export declare enum StockLocationType {
    SUPPLIER = "supplier",
    VIEW = "view",
    INTERNAL = "internal",
    CUSTOMER = "customer",
    INVENTORY = "inventory",
    PRODUCTION = "production",
    TRANSIT = "transit"
}
export declare enum StockMoveState {
    DRAF = "draf",
    WAITING = "waiting",
    CONFIRMED = "confirmed",
    ASSIGNED = "assigned",
    DONE = "done",
    CANCELED = "canceled"
}
export declare enum StockPickingState {
    DRAF = "draf",
    WAITING = "waiting",
    CONFIRMED = "confirmed",
    ASSIGNED = "assigned",
    DONE = "done",
    CANCELED = "canceled"
}
export declare enum StockPickingMoveType {
    DIRECT = "direct",
    ONE = "one"
}
export declare enum StockPickingType {
    INCOMING = "incoming",
    OUTGOING = "outgoing",
    INTERNAL = "internal",
    RETURN = "return"
}
export declare enum StocktakeStatus {
    DRAF = "draf",
    OPEN = "open",
    IN_PROGRESS = "in_progress",
    COMPLETED = "completed"
}
export declare enum StocktakeType {
    MANUAL = "manual",
    SCHEDULE = "schedule"
}
export declare enum StockReferentType {
    SALE_ORDER = "sale_order",
    TRANSFER_ORDER = "transfer_order",
    INBOUND_ORDER = "inbound_order",
    OUTBOUND_ORDER = "outbound_order",
    RETURN_ORDER = "return_order",
    ADJUSTMENT = "adjustment",
    DESTROY = "destroy"
}
export declare enum StockRouterReferentAction {
    ORDER_VERIFIED = "order_verified",
    ORDER_BRANCH_TRANSFER = "order_branch_transfer",
    ORDER_DELIVERY_PROVIDER = "order_delivery_provider",
    ORDER_SELF_DELIVERY = "order_self_delivery",
    ORDER_DIRECT_SALE = "order_direct_sale",
    ORDER_COMPLETED = "order_completed",
    ORDER_CANCELED = "order_canceled"
}
export declare enum StockLotState {
    OPEN = "open",
    FULL_RELEASED = "full_released",
    PARTIAL_DESTROYED = "partial_destroyed",
    FULL_DESTROYED = "full_destroyed",
    SUPPLIER_TOOK_PARTIAL_RECALL = "supplier_took_partial_recall",
    SUPPLIER_TOOK_FULL_RECALL = "supplier_took_full_recall"
}
export declare enum InventoryTransactionState {
    ALLOCATE = "allocate",
    RELEASED = "released",
    RESTOCK = "restock",
    CREATE_COMPLETED = "create_completed"
}
