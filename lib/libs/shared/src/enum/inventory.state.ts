export enum StockLocationType /* */ {
	SUPPLIER = 'supplier', //Vendor Location: Virtual location representing the source location for products coming from your vendors
	VIEW = 'view', //View: Virtual location used to create a hierarchical structures for your warehouse, aggregating its child locations ; can't directly contain products
	INTERNAL = 'internal', //Internal Location: Physical locations inside your own warehouses
	CUSTOMER = 'customer', //Customer Location: Virtual location representing the destination location for products sent to your customers
	INVENTORY = 'inventory', //Inventory Loss: Virtual location serving as counterpart for inventory operations used to correct stock levels (Physical inventories)
	PRODUCTION = 'production', //Production: Virtual counterpart location for production operations: this location consumes the components and produces finished products
	TRANSIT = 'transit', //Transit Location: Counterpart location that should be used in inter-company or inter-warehouses operations
}

export enum StockMoveState /* */ {
	DRAF = 'draf', // New: When the stock move is created and not yet confirmed.
	WAITING = 'waiting', // Waiting Another Move: This state can be seen when a move is waiting for another one, for example in a chained flow.
	CONFIRMED = 'confirmed', // Waiting Availability: This state is reached when the procurement resolution is not straight forward. It may need the scheduler to run, a component to be manufactured...
	ASSIGNED = 'assigned', // Available: When products are reserved, it is set to 'Available'
	DONE = 'done', //Done: When the shipment is processed, the state is 'Done'
	CANCELED = 'canceled', // canceled
}

export enum StockPickingState /* */ {
	DRAF = 'draf', // Draft: The transfer is not confirmed yet. Reservation doesn't apply.
	WAITING = 'waiting', // Waiting another operation: This transfer is waiting for another operation before being ready.
	CONFIRMED = 'confirmed', // Waiting: The transfer is waiting for the availability of some products.
	ASSIGNED = 'assigned', // Ready: The transfer is ready to be processed.
	DONE = 'done', // Done: The transfer has been processed.
	CANCELED = 'canceled', // Cancelled: The transfer has been cancelled.
}

export enum StockPickingMoveType /* */ {
	DIRECT = 'direct', // As soon as possible.
	ONE = 'one', // When all products are ready
}

export enum StockPickingType /* */ {
	INCOMING = 'incoming', // Phiếu nhập kho.
	OUTGOING = 'outgoing', // Phiếu giao hàng
	INTERNAL = 'internal', // Điều chuyển nội bộ
	RETURN = 'return', // Tra hang
}

export enum StocktakeStatus /* */ {
	DRAF = 'draf', // nhap
	OPEN = 'open', // Sẵn sàng kiểm
	IN_PROGRESS = 'in_progress', // đang kiểm kê
	COMPLETED = 'completed', // đã kiểm
}

export enum StocktakeType /* */ {
	MANUAL = 'manual', // Kiểm kê tạo thủ công
	SCHEDULE = 'schedule', // Lịch kiểm kê
}

export enum StockReferentType /* */ {
	SALE_ORDER = 'sale_order', // đơn hàng bán hàng
	TRANSFER_ORDER = 'transfer_order', // phiểu chuyển hàng
	INBOUND_ORDER = 'inbound_order', // phiểu nhập hàng
	OUTBOUND_ORDER = 'outbound_order', // phiểu xuất hàng
	RETURN_ORDER = 'return_order', // phiểu trả hàng
	DESTROY = 'destroy', // phiểu huỷ hàng
}

export enum StockRouterReferentAction /* */ {
	ORDER_VERIFIED = 'order_verified', // Đã xác thực đơn hàng
	ORDER_BRANCH_TRANSFER = 'order_branch_transfer', // Đơn hàng: chuyển cửa hàng
	ORDER_DELIVERY_PROVIDER = 'order_delivery_provider', // Đơn hàng: đã chuyển cho đối tác giao hàng
	ORDER_SELF_DELIVERY = 'order_self_delivery', // Đơn hàng: tự giao
	ORDER_DIRECT_SALE = 'order_direct_sale', // Đơn hàng: bán trực tiếp
	ORDER_COMPLETED = 'order_completed', // hoan tat don hang
	ORDER_CANCELED = 'order_canceled', // hoan tat bi huy
}

export enum StockLotState /* */ {
	OPEN = 'open', // có sẵn
	FULL_RELEASED = 'full_released', // xuất kho trọn vẹn (đã bán hoặc chuyển hàng)
	PARTIAL_DESTROYED = 'partial_destroyed', // tiêu huỷ một phần, xuất kho một phần
	FULL_DESTROYED = 'full_destroyed', // tiêu huỷ toàn phần lô hàng
	SUPPLIER_TOOK_PARTIAL_RECALL = 'supplier_took_partial_recall', // nhà cung cấp thu hồi một phần, xuất kho một phần
	SUPPLIER_TOOK_FULL_RECALL = 'supplier_took_full_recall', // nhà cung cấp thu hồi toàn bộ
}

export enum InventoryTransactionState {
	ALLOCATE = 'allocate',
	RELEASED = 'released',
	RESTOCK = 'restock',
	CREATE_COMPLETED = 'create_completed',
}
