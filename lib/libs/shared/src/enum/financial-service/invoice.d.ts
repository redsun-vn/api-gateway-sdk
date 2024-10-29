export declare enum INVOICE_STATE {
    DRAFT = "draft",
    POSTED = "posted",
    CANCELLED = "cancelled"
}
export declare enum INVOICE_TYPE {
    CUSTOMER = "out_invoice",
    VENDOR = "in_invoice",
    PURCHASE_RECEIPT = "in_receipt",
    SALES_INVOICE = "out_receipt",
    REFUND_INVOICE = "out_refund",
    REFUND_RECEIPT = "in_refund"
}
export declare enum INVOICE_PAYMENT_STATUS {
    UNPAID = "unpaid",
    PARTIALLY_PAID = "partially_paid",
    PAID = "paid",
    UNCOLLECTED = "uncollected",
    VOID = "void"
}
