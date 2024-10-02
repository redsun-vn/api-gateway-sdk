export declare namespace IWebhook {
    interface GHNInterface {
        CODAmount: number;
        CODTransferDate: string;
        OrderCode: number;
        ClientOrderCode: string;
        Description: string;
        TotalFee: number;
        Type: string;
        Status: string;
        PaymentType: string;
    }
    interface SePayConfirm {
        gateway: string;
        transactionDate: string;
        accountNumber: string;
        subAccount?: string | null;
        code: string;
        content: string;
        transferType: string;
        description?: string | null;
        transferAmount: number;
        referenceCode: string;
        accumulated: number;
        id: number;
        shop_id?: number | string;
    }
}
