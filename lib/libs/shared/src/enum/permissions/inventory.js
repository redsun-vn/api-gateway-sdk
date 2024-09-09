"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockLocationPermission = exports.StockPickingTypePermission = exports.PickingTypesPermission = exports.WarehousePermission = exports.WarehouseGroupPermission = void 0;
var WarehouseGroupPermission;
(function (WarehouseGroupPermission) {
    WarehouseGroupPermission["VIEW"] = "warehouse_group-view";
    WarehouseGroupPermission["CREATE"] = "warehouse_group-create";
    WarehouseGroupPermission["UPDATE"] = "warehouse_group-update";
    WarehouseGroupPermission["DELETE"] = "warehouse_group-delete";
})(WarehouseGroupPermission || (exports.WarehouseGroupPermission = WarehouseGroupPermission = {}));
var WarehousePermission;
(function (WarehousePermission) {
    WarehousePermission["VIEW"] = "warehouse-view";
    WarehousePermission["CREATE"] = "warehouse-create";
    WarehousePermission["UPDATE"] = "warehouse-update";
    WarehousePermission["DELETE"] = "warehouse-delete";
})(WarehousePermission || (exports.WarehousePermission = WarehousePermission = {}));
var PickingTypesPermission;
(function (PickingTypesPermission) {
    PickingTypesPermission["VIEW"] = "picking_type-view";
    PickingTypesPermission["CREATE"] = "picking_type-create";
    PickingTypesPermission["UPDATE"] = "picking_type-update";
    PickingTypesPermission["DELETE"] = "picking_type-delete";
})(PickingTypesPermission || (exports.PickingTypesPermission = PickingTypesPermission = {}));
var StockPickingTypePermission;
(function (StockPickingTypePermission) {
    StockPickingTypePermission["VIEW"] = "stock_picking_type-view";
    StockPickingTypePermission["CREATE"] = "stock_picking_type-create";
    StockPickingTypePermission["UPDATE"] = "stock_picking_type-update";
    StockPickingTypePermission["DELETE"] = "stock_picking_type-delete";
})(StockPickingTypePermission || (exports.StockPickingTypePermission = StockPickingTypePermission = {}));
var StockLocationPermission;
(function (StockLocationPermission) {
    StockLocationPermission["VIEW"] = "stock_location-view";
    StockLocationPermission["CREATE"] = "stock_location-create";
    StockLocationPermission["UPDATE"] = "stock_location-update";
    StockLocationPermission["DELETE"] = "stock_location-delete";
})(StockLocationPermission || (exports.StockLocationPermission = StockLocationPermission = {}));
//# sourceMappingURL=inventory.js.map