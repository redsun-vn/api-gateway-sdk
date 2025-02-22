"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inventory = exports.subscriptions = exports.staffs = exports.shipping_methods = exports.sales_channels = exports.payment_methods = exports.shop_configs = exports.shipping_configs = exports.sales_channel_configs = exports.receipts = exports.staff = exports.print_template = exports.pos_sessions = exports.pos_printers = exports.pos_configs = exports.payment_configs = exports.groups = exports.domains = exports.brands = exports.branches = exports.hr = exports.api_keys = exports.reservations = exports.reservation = exports.uom_uoms = exports.uom_categories = exports.tray_items = exports.taxes = exports.tags = exports.recurrence_period_configs_default = exports.recurrence_period_configs = exports.products = exports.product_packages = exports.product_brands = exports.pricebooks = exports.pricebook = exports.mix_ingredients = exports.manufacturers = exports.ingredients = exports.categories = exports.product = exports.partners = exports.partner_categories = exports.partner = exports.order_subscriptions = exports.sale_orders = exports.orders = exports.order = exports.comments = exports.comment = void 0;
exports.cms = exports.payment_cards = exports.accounting = exports.category_cards = exports.vnpay_web = exports.vnpay_qrcode = exports.tomotek_order = exports.tomotek_device = exports.tomotek_config = exports.payments = exports.payment_links = exports.payment = exports.reports = exports.report = exports.reconciliation_transactions = exports.reconciliations = exports.reconciliation_payments = exports.point_transactions = exports.point_partners = exports.loyalty_sale_channels = exports.loyalty_rules = exports.loyalty_rewards = exports.loyalty_programs = exports.loyalty_levels = exports.loyalty_coupons = exports.loyalty_config = exports.shipping_config = exports.fulfillments = exports.fulfillment_orders = exports.activity = void 0;
exports.comment = __importStar(require("./comment"));
exports.comments = __importStar(require("./comments"));
exports.order = __importStar(require("./order"));
exports.orders = __importStar(require("./orders"));
exports.sale_orders = __importStar(require("./sale_orders"));
exports.order_subscriptions = __importStar(require("./order_subscriptions"));
exports.partner = __importStar(require("./partner"));
exports.partner_categories = __importStar(require("./partner_categories"));
exports.partners = __importStar(require("./partners"));
exports.product = __importStar(require("./product"));
exports.categories = __importStar(require("./categories"));
exports.ingredients = __importStar(require("./ingredients"));
exports.manufacturers = __importStar(require("./manufacturers"));
exports.mix_ingredients = __importStar(require("./mix_ingredients"));
exports.pricebook = __importStar(require("./pricebook"));
exports.pricebooks = __importStar(require("./pricebooks"));
exports.product_brands = __importStar(require("./product_brands"));
exports.product_packages = __importStar(require("./product_packages"));
exports.products = __importStar(require("./products"));
exports.recurrence_period_configs = __importStar(require("./recurrence_period_configs"));
exports.recurrence_period_configs_default = __importStar(require("./recurrence_period_configs_default"));
exports.tags = __importStar(require("./tags"));
exports.taxes = __importStar(require("./taxes"));
exports.tray_items = __importStar(require("./tray_items"));
exports.uom_categories = __importStar(require("./uom_categories"));
exports.uom_uoms = __importStar(require("./uom_uoms"));
exports.reservation = __importStar(require("./reservation"));
exports.reservations = __importStar(require("./reservations"));
exports.api_keys = __importStar(require("./api_keys"));
exports.hr = __importStar(require("./hr"));
exports.branches = __importStar(require("./branches"));
exports.brands = __importStar(require("./brands"));
exports.domains = __importStar(require("./domains"));
exports.groups = __importStar(require("./groups"));
exports.payment_configs = __importStar(require("./payment_configs"));
exports.pos_configs = __importStar(require("./pos_configs"));
exports.pos_printers = __importStar(require("./pos_printers"));
exports.pos_sessions = __importStar(require("./pos_sessions"));
exports.print_template = __importStar(require("./print_template"));
exports.staff = __importStar(require("./staff"));
exports.receipts = __importStar(require("./receipts"));
exports.sales_channel_configs = __importStar(require("./sales_channel_configs"));
exports.shipping_configs = __importStar(require("./shipping_configs"));
exports.shop_configs = __importStar(require("./shop_configs"));
exports.payment_methods = __importStar(require("./payment_methods"));
exports.sales_channels = __importStar(require("./sales_channels"));
exports.shipping_methods = __importStar(require("./shipping_methods"));
exports.staffs = __importStar(require("./staffs"));
exports.subscriptions = __importStar(require("./subscriptions"));
exports.inventory = __importStar(require("./inventory"));
exports.activity = __importStar(require("./activity"));
exports.fulfillment_orders = __importStar(require("./fulfillment_orders"));
exports.fulfillments = __importStar(require("./fulfillments"));
exports.shipping_config = __importStar(require("./shipping_config"));
exports.loyalty_config = __importStar(require("./loyalty_config"));
exports.loyalty_coupons = __importStar(require("./loyalty_coupons"));
exports.loyalty_levels = __importStar(require("./loyalty_levels"));
exports.loyalty_programs = __importStar(require("./loyalty_programs"));
exports.loyalty_rewards = __importStar(require("./loyalty_rewards"));
exports.loyalty_rules = __importStar(require("./loyalty_rules"));
exports.loyalty_sale_channels = __importStar(require("./loyalty_sale_channels"));
exports.point_partners = __importStar(require("./point_partners"));
exports.point_transactions = __importStar(require("./point_transactions"));
exports.reconciliation_payments = __importStar(require("./reconciliation_payments"));
exports.reconciliations = __importStar(require("./reconciliations"));
exports.reconciliation_transactions = __importStar(require("./reconciliation_transactions"));
exports.report = __importStar(require("./report"));
exports.reports = __importStar(require("./reports"));
exports.payment = __importStar(require("./payment"));
exports.payment_links = __importStar(require("./payment_links"));
exports.payments = __importStar(require("./payments"));
exports.tomotek_config = __importStar(require("./tomotek_config"));
exports.tomotek_device = __importStar(require("./tomotek_device"));
exports.tomotek_order = __importStar(require("./tomotek_order"));
exports.vnpay_qrcode = __importStar(require("./vnpay_qrcode"));
exports.vnpay_web = __importStar(require("./vnpay_web"));
exports.category_cards = __importStar(require("./category_cards"));
exports.accounting = __importStar(require("./accounting"));
exports.payment_cards = __importStar(require("./payment_cards"));
exports.cms = __importStar(require("./cms"));
//# sourceMappingURL=index.js.map