"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SHIPPING_PROVIDER_ENUM = exports.RECEIVE_METHOD = exports.PAYMENT_TARGET = exports.FULFILLMENT_STATUS = exports.FULFILLMENT_SHIPPING_STATUS = exports.FULFILLMENT_REQUEST_STATUS = exports.FULFILLMENT_ORDER_STATUS = void 0;
var FULFILLMENT_ORDER_STATUS;
(function (FULFILLMENT_ORDER_STATUS) {
    FULFILLMENT_ORDER_STATUS["OPEN"] = "open";
    FULFILLMENT_ORDER_STATUS["IN_PROGRESS"] = "in_progress";
    FULFILLMENT_ORDER_STATUS["SCHEDULED"] = "scheduled";
    FULFILLMENT_ORDER_STATUS["CANCELLED"] = "cancelled";
    FULFILLMENT_ORDER_STATUS["ON_HOLD"] = "on_hold";
    FULFILLMENT_ORDER_STATUS["INCOMPLETE"] = "incomplete";
    FULFILLMENT_ORDER_STATUS["CLOSED"] = "closed";
})(FULFILLMENT_ORDER_STATUS || (exports.FULFILLMENT_ORDER_STATUS = FULFILLMENT_ORDER_STATUS = {}));
var FULFILLMENT_REQUEST_STATUS;
(function (FULFILLMENT_REQUEST_STATUS) {
    FULFILLMENT_REQUEST_STATUS["UNSUBMITTED"] = "unsubmitted";
    FULFILLMENT_REQUEST_STATUS["SUBMITTED"] = "submitted";
    FULFILLMENT_REQUEST_STATUS["ACCEPTED"] = "accepted";
    FULFILLMENT_REQUEST_STATUS["REJECTED"] = "rejected";
    FULFILLMENT_REQUEST_STATUS["CANCELLATION_REQUESTED"] = "cancellation_requested";
    FULFILLMENT_REQUEST_STATUS["CANCELLATION_ACCEPTED"] = "cancellation_accepted";
    FULFILLMENT_REQUEST_STATUS["CANCELLATION_REJECTED"] = "cancellation_rejected";
    FULFILLMENT_REQUEST_STATUS["CLOSED"] = "closed";
})(FULFILLMENT_REQUEST_STATUS || (exports.FULFILLMENT_REQUEST_STATUS = FULFILLMENT_REQUEST_STATUS = {}));
var FULFILLMENT_SHIPPING_STATUS;
(function (FULFILLMENT_SHIPPING_STATUS) {
    FULFILLMENT_SHIPPING_STATUS["DRAFT"] = "draft";
    FULFILLMENT_SHIPPING_STATUS["WAITING"] = "waiting";
    FULFILLMENT_SHIPPING_STATUS["PICKED"] = "picked";
    FULFILLMENT_SHIPPING_STATUS["DELIVERING"] = "delivering";
    FULFILLMENT_SHIPPING_STATUS["DELIVERED"] = "delivered";
    FULFILLMENT_SHIPPING_STATUS["SUCCESS"] = "success";
    FULFILLMENT_SHIPPING_STATUS["CANCEL"] = "cancel";
    FULFILLMENT_SHIPPING_STATUS["FAIL"] = "fail";
    FULFILLMENT_SHIPPING_STATUS["ERROR"] = "error";
    FULFILLMENT_SHIPPING_STATUS["WAITING_RETURN"] = "waiting_return";
    FULFILLMENT_SHIPPING_STATUS["RETURNING"] = "returning";
    FULFILLMENT_SHIPPING_STATUS["RETURNED"] = "returned";
})(FULFILLMENT_SHIPPING_STATUS || (exports.FULFILLMENT_SHIPPING_STATUS = FULFILLMENT_SHIPPING_STATUS = {}));
var FULFILLMENT_STATUS;
(function (FULFILLMENT_STATUS) {
    FULFILLMENT_STATUS["PENDING"] = "pending";
    FULFILLMENT_STATUS["OPEN"] = "open";
    FULFILLMENT_STATUS["PROGRESSING"] = "progressing";
    FULFILLMENT_STATUS["SUCCESS"] = "success";
    FULFILLMENT_STATUS["CANCELLED"] = "cancelled";
    FULFILLMENT_STATUS["ERROR"] = "error";
    FULFILLMENT_STATUS["FAILURE"] = "failure";
    FULFILLMENT_STATUS["CLOSED"] = "closed";
})(FULFILLMENT_STATUS || (exports.FULFILLMENT_STATUS = FULFILLMENT_STATUS = {}));
var PAYMENT_TARGET;
(function (PAYMENT_TARGET) {
    PAYMENT_TARGET["SENDER"] = "sender";
    PAYMENT_TARGET["RECEIVER"] = "receiver";
})(PAYMENT_TARGET || (exports.PAYMENT_TARGET = PAYMENT_TARGET = {}));
var RECEIVE_METHOD;
(function (RECEIVE_METHOD) {
    RECEIVE_METHOD["ALLOW_CHECK"] = "allow_check";
    RECEIVE_METHOD["NONE_CHECK"] = "none_check";
})(RECEIVE_METHOD || (exports.RECEIVE_METHOD = RECEIVE_METHOD = {}));
var SHIPPING_PROVIDER_ENUM;
(function (SHIPPING_PROVIDER_ENUM) {
    SHIPPING_PROVIDER_ENUM["GHN"] = "ghn";
})(SHIPPING_PROVIDER_ENUM || (exports.SHIPPING_PROVIDER_ENUM = SHIPPING_PROVIDER_ENUM = {}));
//# sourceMappingURL=fulfillment-order.state.js.map